import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1 className="font-normal">Afaq Anwar</h1>
      <div className="block h-10" />
      <section>
        <p className="font-light">👋</p>
      </section>
    </div>
  );
}
