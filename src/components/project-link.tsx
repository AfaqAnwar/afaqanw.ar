interface ProjectLinkProps {
	name: string;
	href: string;
}

export const ProjectLink = ({ name, href }: ProjectLinkProps) => (
	<li className="text-ink hover:text-muted transition-colors duration-250">
		<a target="_blank" href={href} rel="noopener">
			{name}
		</a>
	</li>
);
