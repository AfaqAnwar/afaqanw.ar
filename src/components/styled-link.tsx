import type { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: ReactNode;
}

export const StyledLink = ({ href, children, ...props }: StyledLinkProps) => (
	<a
		href={href}
		className="underline decoration-muted underline-offset-2 hover:decoration-ink transition-colors duration-125"
		{...props}
	>
		{children}
		{props.target === "_blank" && <span className="sr-only"> (opens in new tab)</span>}
	</a>
);
