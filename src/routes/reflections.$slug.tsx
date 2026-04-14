import { createFileRoute } from "@tanstack/react-router";
import { ReflectionPostPage } from "../pages/reflection-post-page";

export const Route = createFileRoute("/reflections/$slug")({
	component: ReflectionPostPage,
});
