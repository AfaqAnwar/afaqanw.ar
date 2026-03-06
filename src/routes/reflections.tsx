import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/reflections")({
	component: Reflections,
});

interface Reflection {
	title: string;
	slug: string;
	date: string;
}

const reflections: Reflection[] = [{ title: "Friction", slug: "friction", date: "2026-03-06" }];

function Reflections() {
	const childMatches = useChildMatches();
	const isViewingPost = childMatches.length > 0;

	if (isViewingPost) {
		return <Outlet />;
	}

	return (
		<div className="w-full">
			<h1 className="font-normal text-right">Reflections</h1>
			<div className="block h-10" />
			<section>
				<ul className="list-none">
					{reflections.map(({ title, slug, date }) => (
						<li key={slug}>
							<Link
								to="/reflections/$slug"
								params={{ slug }}
								className="flex items-baseline gap-2 w-full font-light text-muted hover:text-ink transition-colors duration-250 "
							>
								<span className="shrink-0">{title}</span>
								<span className="flex-1 border-b border-dashed" />
								<span className="text-sm shrink-0">{date}</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
