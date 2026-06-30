import { useParams } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { Friction } from "../reflections/friction";
import { Taste } from "../reflections/taste";
import { Tokens } from "../reflections/tokens";

const posts: Record<string, ComponentType> = {
	taste: Taste,
	friction: Friction,
	tokens: Tokens,
};

export function ReflectionPostPage() {
	const { slug } = useParams({ from: "/reflections/$slug" });
	const Post = posts[slug];

	if (!Post) {
		return <p className="font-light">Post not found.</p>;
	}

	return <Post />;
}
