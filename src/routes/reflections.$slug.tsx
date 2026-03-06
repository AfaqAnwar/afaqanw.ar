import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Friction } from "../reflections/friction";

const posts: Record<string, () => ReactNode> = {
	friction: Friction,
};

export const Route = createFileRoute("/reflections/$slug")({
	component: ReflectionPost,
});

function ReflectionPost() {
	const { slug } = Route.useParams();
	const Post = posts[slug];

	if (!Post) {
		return <p className="font-light">Post not found.</p>;
	}

	return <Post />;
}
