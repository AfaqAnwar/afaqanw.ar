import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1 className="font-normal">Afaq Anwar</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          I'm a front-end software engineer working at{" "}
          <a
            target="_blank"
            href="https://www.cvs.com/"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            CVS
          </a>{" "}
          with React and TypeScript.
        </p>
        <p className="font-light">
          Alongside web development I've also taken an interest in mobile app
          development, UX/UI design and low level systems.
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
        <p className="font-light"></p>
      </section>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          If you want to know more about me, check out{" "}
          <Link
            to="/reflections"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            reflections
          </Link>{" "}
          <span className="text-[#adb5bd]">/</span>{" "}
          <Link
            to="/projects"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            projects
          </Link>{" "}
        </p>
        <p className="font-light">
          or find me on{" "}
          <a
            target="_blank"
            href="https://www.x.com/afaqanw"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            X
          </a>
          <span className="text-[#adb5bd]">, </span>
          <a
            target="_blank"
            href="https://github.com/AfaqAnwar"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/AfaqAnwar"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40]"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
