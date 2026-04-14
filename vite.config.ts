import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

const CSP =
	"default-src 'none'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; connect-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'none';";

function cspPlugin(): Plugin {
	return {
		name: "inject-csp",
		apply: "build",
		transformIndexHtml(html) {
			return html.replace(
				"<head>",
				`<head>\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`
			);
		},
	};
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
		tailwindcss(),
		cspPlugin(),
	],
});
