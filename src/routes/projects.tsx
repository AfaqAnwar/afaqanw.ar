import { createFileRoute } from "@tanstack/react-router";
import { ProjectLink } from "../components/project-link";
import { StyledLink } from "../components/styled-link";

export const Route = createFileRoute("/projects")({
	component: Projects,
});

interface Project {
	name: string;
	href: string;
}

const projects: Project[] = [
	{ name: "Just Another Job Tracker", href: "https://www.justanotherjobtracker.com" },
	{ name: "Solvify", href: "https://github.com/AfaqAnwar/solvify" },
	{ name: "Introspection", href: "https://github.com/AfaqAnwar/introspection" },
	{ name: "Money Manager", href: "https://github.com/AfaqAnwar/money-manager" },
	{ name: "Py-Soccer-Bot", href: "https://github.com/AfaqAnwar/Py-Soccer-Bot" },
	{ name: "Monday", href: "https://github.com/AfaqAnwar/Monday" },
	{ name: "Rennon", href: "https://github.com/AfaqAnwar/Rennon" },
];

function Projects() {
	return (
		<div>
			<h1 className="font-normal text-right">Projects</h1>
			<div className="block h-10" />
			<section>
				<p className="font-light">
					Over the past few years I've gotten the opportunity to work alongside and learn
					from some outstanding engineers. Even though I'm just getting started, the
					projects I've gotten the opportunity to be a part of have provided priceless
					experience.
				</p>
			</section>
			<div className="block h-10" />
			<section>
				<a
					target="_blank"
					href="https://www.cvs.com/"
					rel="noopener noreferrer"
					aria-label="CVS Health (opens in new tab)"
				>
					<img src="/cvshealthlogo.svg" alt="" width={128} className="brightness-0" />
				</a>
				<div className="block h-5" />
				<p className="font-light">
					I started at{" "}
					<StyledLink
						target="_blank"
						href="https://www.cvs.com/"
						rel="noopener noreferrer"
					>
						CVS
					</StyledLink>{" "}
					as an intern briefly focusing on developing DevOps tooling with Angular.
				</p>
				<div className="block h-2.5" />
				<p className="font-light">
					During the start of my full time role I had the opportunity to learn about{" "}
					<StyledLink
						target="_blank"
						href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
						rel="noopener noreferrer"
					>
						accessibility
					</StyledLink>{" "}
					across web and mobile platforms.
				</p>
				<div className="block h-2.5" />
				<p className="font-light">
					After my time with the accessibility team, I transitioned to the RxConnect
					modernization project and began my career in front-end. We are currently
					rebuilding the RxConnect platform, which is used by pharmacists daily, with
					React.
				</p>
			</section>
			<div className="block h-10" />
			<div className="border-b border-border max-w-40"></div>
			<div className="block h-10" />
			<section>
				<p className="font-light">
					Some of my best personal projects (which can be found on{" "}
					<StyledLink
						target="_blank"
						href="https://github.com/AfaqAnwar"
						rel="noopener noreferrer"
					>
						GitHub
					</StyledLink>
					{")"}
				</p>
				<div className="block h-5" />
				<ul>
					{projects.map((project) => (
						<ProjectLink key={project.href} name={project.name} href={project.href} />
					))}
				</ul>
			</section>
		</div>
	);
}
