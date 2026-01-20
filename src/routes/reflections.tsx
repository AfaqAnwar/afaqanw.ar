import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reflections")({
  component: Reflections,
});

function Reflections() {
  return (
    <div>
      <h1 className="font-normal">Reflections</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">To be written.</p>
      </section>
    </div>
  );
}
