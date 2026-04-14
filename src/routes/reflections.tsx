import { createFileRoute } from "@tanstack/react-router";
import { ReflectionsPage } from "../pages/reflections-page";

export const Route = createFileRoute("/reflections")({
	component: ReflectionsPage,
});
