import { Link } from "@tanstack/react-router";
import { StyledLink } from "../components/styled-link";

const inlineLinkStyle =
  "underline decoration-muted underline-offset-2 hover:decoration-ink transition-colors duration-125";

export function AboutPage() {
  return (
    <div>
      <h1 className="font-normal text-right">Afaq Anwar</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          I'm a front-end software engineer working at{" "}
          <StyledLink
            target="_blank"
            href="https://www.cvs.com/"
            rel="noopener noreferrer"
          >
            CVS
          </StyledLink>{" "}
          with React and TypeScript.
        </p>
        <p className="font-light">
          Alongside web development I've also taken an interest in UX/UI design,
          developer tooling and optimizing agentic workflows
        </p>
      </section>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          Since getting my first computer at age 7, I was fascinated with the
          power within these boxes. At first it was the idea of making my own
          video games, which then turned into making apps, followed by computer
          vision and machine learning which really interested me. Eventually, I
          received my high school diploma from Brooklyn Technical High School in
          2019, followed by my BSc degree in Computer Science from New York
          Institute of Technology in 2023.
        </p>
      </section>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          If you want to know more about me, check out{" "}
          <Link to="/reflections" className={inlineLinkStyle}>
            reflections
          </Link>{" "}
          <span className="text-muted">/</span>{" "}
          <Link to="/projects" className={inlineLinkStyle}>
            projects
          </Link>{" "}
        </p>
        <p className="font-light">
          or find me on{" "}
          {/*
					<StyledLink
						target="_blank"
						href="https://www.x.com/afaqanw"
						rel="noopener noreferrer"
					>
						X
					</StyledLink>
          <span className="text-muted">, </span>
          */}
          <StyledLink
            target="_blank"
            href="https://www.linkedin.com/in/AfaqAnwar"
            rel="noopener noreferrer"
          >
            LinkedIn
          </StyledLink>{" "}
          and{" "}
          <StyledLink
            target="_blank"
            href="https://github.com/AfaqAnwar"
            rel="noopener noreferrer"
          >
            GitHub
          </StyledLink>
          .
        </p>
      </section>
    </div>
  );
}
