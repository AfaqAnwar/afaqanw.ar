import type { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: ReactNode;
}

export const StyledLink = ({ href, children, ...props }: StyledLinkProps) => (
	<a
		href={href}
		className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40] transition-colors duration-125"
		{...props}
	>
		{children}
	</a>
);
