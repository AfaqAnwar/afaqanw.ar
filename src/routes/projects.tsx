import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div>
      <h1 className="font-normal">Projects</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">To be written.</p>
      </section>
    </div>
  );
}
