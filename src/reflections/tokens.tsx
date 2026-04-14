import { useEffect, useRef, useState } from "react";

const HOOK = "Code is cheap.";
const CORRECTION = "Tokens are cheap*";
const BODY =
	"At least for now. AI has a subsidization problem that, for a while, was invisible. The leading research labs are operating at heavy losses just to grab market share. Great for consumers, but a problem worth paying attention to.";

const TYPE_MS = 22;
const DELETE_MS = 35;
const PAUSE_MS = 1200;
const CHAR_FADE_MS = 400;
const HIGHLIGHT_LINGER_MS = 1200;
const HIGHLIGHT_FADE_MS = 1000;
const COST_PER_TOKEN = 0.000075;

const TOKEN_COLORS = [
	"rgba(150, 180, 160, 0.35)",
	"rgba(190, 165, 140, 0.35)",
	"rgba(155, 170, 195, 0.35)",
	"rgba(195, 155, 160, 0.35)",
	"rgba(170, 160, 195, 0.35)",
	"rgba(195, 180, 145, 0.35)",
];

function bpePretokenize(text: string): string[] {
	const pattern = /'(?:s|t|ll|ve|re|d|m)|[^\s\p{L}\p{N}]| ?\p{L}+| ?\p{N}+|\s/gu;
	return text.match(pattern) ?? [];
}

interface Token {
	text: string;
	isWord: boolean;
}

function tokenize(text: string): Token[] {
	return bpePretokenize(text).map((t) => ({
		text: t,
		isWord: /\S/.test(t),
	}));
}

const HOOK_TOKENS = tokenize(HOOK);
const CORRECTION_TOKENS = tokenize(CORRECTION);
const BODY_TOKENS = tokenize(BODY);
const BODY_TOTAL = BODY.length;

type Phase =
	| "typing-hook"
	| "pausing"
	| "deleting"
	| "typing-correction"
	| "streaming-body"
	| "highlight-linger"
	| "highlight-fading"
	| "done";

function renderTokens(
	tokens: Token[],
	charsTyped: number,
	showHighlights: boolean,
	isFading: boolean,
	keyPrefix: string
) {
	const rendered: React.ReactNode[] = [];
	let cursor = 0;
	let colorIndex = 0;

	for (let i = 0; i < tokens.length; i++) {
		const { text, isWord } = tokens[i];
		const tokenEnd = cursor + text.length;

		if (cursor >= charsTyped) break;

		const visiblePart = text.slice(0, charsTyped - cursor);

		if (isWord) {
			const leading = visiblePart.startsWith(" ") ? " " : "";
			const word = leading ? visiblePart.slice(1) : visiblePart;
			const isPunct = /^[^\p{L}\p{N}]+$/u.test(word);
			const color = TOKEN_COLORS[colorIndex % TOKEN_COLORS.length];
			colorIndex++;

			const chars = word.split("").map((ch, ci) => {
				const charPos = cursor + (leading ? 1 : 0) + ci;
				const age = charsTyped - charPos;
				const fadedIn = age > CHAR_FADE_MS / TYPE_MS;
				return (
					<span
						key={`${keyPrefix}-${i}-${charPos}`}
						style={{
							opacity: fadedIn ? 1 : 0,
							animation: fadedIn
								? "none"
								: `char-fade-in ${CHAR_FADE_MS}ms ease forwards`,
						}}
					>
						{ch}
					</span>
				);
			});

			rendered.push(
				<span key={`${keyPrefix}-${i}`}>
					{leading}
					<span
						style={{
							backgroundColor: showHighlights ? color : "transparent",
							transition: isFading
								? `background-color ${HIGHLIGHT_FADE_MS}ms ease`
								: "none",
							borderRadius: isPunct ? "2px" : "3px",
							padding: isPunct ? "0" : "0 2px",
						}}
					>
						{chars}
					</span>
				</span>
			);
		} else {
			rendered.push(<span key={`${keyPrefix}-${i}`}>{visiblePart}</span>);
		}

		cursor = tokenEnd;
		if (tokenEnd > charsTyped) break;
	}

	return rendered;
}

function StreamOpening({ onFadeStart }: { onFadeStart: () => void }) {
	const [phase, setPhase] = useState<Phase>("typing-hook");
	const [hookChars, setHookChars] = useState(0);
	const [correctionChars, setCorrectionChars] = useState(0);
	const [bodyChars, setBodyChars] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const onFadeStartRef = useRef(onFadeStart);
	useEffect(() => {
		onFadeStartRef.current = onFadeStart;
	}, [onFadeStart]);

	useEffect(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}

		if (phase === "typing-hook") {
			intervalRef.current = setInterval(() => {
				setHookChars((p) => {
					if (p >= HOOK.length) {
						clearInterval(intervalRef.current!);
						setTimeout(() => setPhase("pausing"), 0);
						return p;
					}
					return p + 1;
				});
			}, TYPE_MS);
		}

		if (phase === "pausing") {
			const t = setTimeout(() => setPhase("deleting"), PAUSE_MS);
			return () => clearTimeout(t);
		}

		if (phase === "deleting") {
			intervalRef.current = setInterval(() => {
				setHookChars((p) => {
					if (p <= 0) {
						clearInterval(intervalRef.current!);
						setTimeout(() => setPhase("typing-correction"), 0);
						return 0;
					}
					return p - 1;
				});
			}, DELETE_MS);
		}

		if (phase === "typing-correction") {
			intervalRef.current = setInterval(() => {
				setCorrectionChars((p) => {
					if (p >= CORRECTION.length) {
						clearInterval(intervalRef.current!);
						setTimeout(() => setPhase("streaming-body"), 0);
						return p;
					}
					return p + 1;
				});
			}, TYPE_MS);
		}

		if (phase === "streaming-body") {
			intervalRef.current = setInterval(() => {
				setBodyChars((p) => {
					if (p >= BODY_TOTAL) {
						clearInterval(intervalRef.current!);
						setTimeout(() => {
							setPhase("highlight-linger");
							setTimeout(() => {
								setPhase("highlight-fading");
								onFadeStartRef.current();
								setTimeout(() => setPhase("done"), HIGHLIGHT_FADE_MS);
							}, HIGHLIGHT_LINGER_MS);
						}, 0);
						return p;
					}
					return p + 1;
				});
			}, TYPE_MS);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [phase]);

	const isHookPhase = phase === "typing-hook" || phase === "pausing" || phase === "deleting";
	const showCorrection = !isHookPhase;
	const showBody =
		phase === "streaming-body" ||
		phase === "highlight-linger" ||
		phase === "highlight-fading" ||
		phase === "done";
	const showHighlights = phase !== "highlight-fading" && phase !== "done";
	const isFading = phase === "highlight-fading";
	const isDone = phase === "done";

	const charsTyped = Math.min(bodyChars, BODY_TOTAL);

	const countVisibleTokens = (tokens: Token[], typed: number) =>
		tokens.filter((t, i) => {
			if (!t.isWord) return false;
			let end = 0;
			for (let j = 0; j <= i; j++) end += tokens[j].text.length;
			return end <= typed;
		}).length;

	let totalTokens: number;
	if (isHookPhase) {
		totalTokens = countVisibleTokens(HOOK_TOKENS, hookChars);
	} else if (!showBody) {
		totalTokens = countVisibleTokens(CORRECTION_TOKENS, correctionChars);
	} else {
		totalTokens =
			countVisibleTokens(CORRECTION_TOKENS, correctionChars) +
			countVisibleTokens(BODY_TOKENS, charsTyped);
	}

	const cost = (totalTokens * COST_PER_TOKEN).toFixed(6);

	return (
		<div>
			<p className="font-light mb-4">
				{isHookPhase && renderTokens(HOOK_TOKENS, hookChars, showHighlights, false, "h")}
				{showCorrection &&
					renderTokens(CORRECTION_TOKENS, correctionChars, showHighlights, isFading, "c")}
			</p>
			{showBody && (
				<p className="font-light mb-4">
					{renderTokens(BODY_TOKENS, charsTyped, showHighlights, isFading, "b")}
				</p>
			)}
			<div className="relative">
				<p
					className="text-xs absolute top-0 left-0"
					style={{
						opacity: isFading || isDone ? 0 : 1,
						transition: `opacity ${HIGHLIGHT_FADE_MS}ms ease`,
						color: "var(--color-muted)",
						fontVariantNumeric: "tabular-nums",
					}}
				>
					{totalTokens} tokens — ${cost}
				</p>
			</div>
			<style>{`
				@keyframes char-fade-in {
					from { opacity: 0; }
					to { opacity: 1; }
				}
			`}</style>
		</div>
	);
}

export const Tokens = () => {
	const [showRest, setShowRest] = useState(false);

	return (
		<div>
			<h1 className="font-normal text-right">Tokens</h1>
			<div className="block h-10" />
			<section>
				<StreamOpening onFadeStart={() => setShowRest(true)} />
				<div
					style={{
						opacity: showRest ? 1 : 0,
						transition: `opacity ${HIGHLIGHT_FADE_MS}ms ease`,
					}}
				>
					<p className="font-light mb-4">
						LLMs were supposed to disrupt industries, evolve the way everyone works, and
						change humanity. So far, the only industry AI has drastically disrupted is
						its own: software.
					</p>
					<p className="font-light mb-4">
						For better or for worse, AI is rapidly being adopted at scale by developers.
						It's here, it <em>works</em>, and who doesn't want to get paid for asking a
						computer to solve the problem? The real cost, though, is how much it takes
						to train and host these models.
					</p>
					<p className="font-light mb-4">
						A $20 subscription covers most general use cases. But developers rely on
						context. That context comes at a cost: tokens. Right now, labs are heavily
						backed by venture capital. They can afford to give out more compute than
						they charge for. That lets companies like OpenAI or Anthropic lock
						developers into their models, their tools, and most importantly, a habit.
					</p>
					<p className="font-light mb-8">
						For now, companies are footing the bills for these massive enterprise
						contracts. But tokens, at this rate, will not stay subsidized forever.
						Companies will want to turn a profit, and even the largest enterprise deals
						won't hold that line indefinitely. Outside the top few, I'm not sure which
						companies will stomach what's coming.
					</p>
					<p className="font-light mb-4">
						We're in too deep to turn back. And with agentic workflows making every task
						a hundred API calls, that asterisk is going to matter more than anyone wants
						to admit.
					</p>
				</div>
			</section>
		</div>
	);
};
