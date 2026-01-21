import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div>
      <h1 className="font-normal text-right">Projects</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          Over the past few years I've gotten the opportunity to work alongside
          and learn from some outstanding engineers. Even though I'm just
          getting started, the projects I've gotten the opportunity to be a part
          of have provided priceless experience.
        </p>
      </section>
      <div className="block h-10" />
      <section>
        <a target="_blank" href="https://www.cvs.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/CVS_Health_logo.svg"
            alt="CVS Health logo"
            width={128}
            className="brightness-0"
          />
        </a>
        <div className="block h-5" />
        <p className="font-light">
          I started at{" "}
          <a
            target="_blank"
            href="https://www.cvs.com/"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40] transition-colors duration-125"
          >
            CVS
          </a>{" "}
          as an intern briefly focusing on developing DevOps tooling with
          Angular.
        </p>
        <div className="block h-2.5" />
        <p className="font-light">
          During the start of my full time role I had the opportunity to learn
          about{" "}
          <a
            target="_blank"
            href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40] transition-colors duration-125"
          >
            accessibility
          </a>{" "}
          across web and mobile platforms.
        </p>
        <div className="block h-2.5" />
        <p className="font-light">
          After my time with the accessibility team, I transitioned to the
          RxConnect modernization project and began my career in front-end. We
          are currently rebuilding the RxConnect platform, which is used by
          pharmacists daily, with React.
        </p>
      </section>
      <div className="block h-10" />
      <div className="border-b border-[#dee2e6] max-w-40"></div>
      <div className="block h-10" />
      <section>
        <p className="font-light">
          Some of my best personal projects (which can be found on{" "}
          <a
            target="_blank"
            href="https://github.com/AfaqAnwar"
            className="underline decoration-[#adb5bd] underline-offset-2 hover:decoration-[#343a40] transition-colors duration-125"
          >
            GitHub
          </a>
          {")"}
        </p>
        <div className="block h-5" />
        <ul>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a target="_blank" href="https://github.com/AfaqAnwar/solvify">
              Solvify
            </a>
          </li>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a
              target="_blank"
              href="https://github.com/AfaqAnwar/introspection"
            >
              Introspection
            </a>
          </li>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a
              target="_blank"
              href="https://github.com/AfaqAnwar/money-manager"
            >
              Money Manager
            </a>
          </li>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a
              target="_blank"
              href="https://github.com/AfaqAnwar/Py-Soccer-Bot"
            >
              Py-Soccer-Bot
            </a>
          </li>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a target="_blank" href="https://github.com/AfaqAnwar/Monday">
              Monday
            </a>
          </li>
          <li className="text-[#343a40] hover:text-[#adb5bd] transition-colors duration-250">
            <a target="_blank" href="https://github.com/AfaqAnwar/Rennon">
              Rennon
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
