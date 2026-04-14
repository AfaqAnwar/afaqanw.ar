import { Link, Outlet, useLocation } from "@tanstack/react-router";

const linkStyle = "text-muted hover:text-ink [&.active]:text-ink transition-colors duration-250";

export function RootLayout() {
	const { pathname } = useLocation();

	return (
		<div className="p-10 flex flex-col sm:flex-row sm:justify-end">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-1 focus:bg-[#fcfcfc] focus:text-ink font-serif font-light italic"
			>
				Skip to main content
			</a>
			<aside
				aria-label="Site navigation"
				className="mb-8 sm:mb-0 sm:pl-10 sm:w-40 sm:order-2 font-serif font-light italic"
			>
				<nav
					aria-label="Main navigation"
					className="flex flex-row justify-end gap-2 pb-4 border-b border-border sm:flex-col sm:border-b-0 sm:pb-0 sm:sticky sm:top-10"
				>
					<Link to="/" className={linkStyle}>
						about
					</Link>
					<Link to="/reflections" className={linkStyle}>
						reflections
					</Link>
					<Link to="/projects" className={linkStyle}>
						projects
					</Link>
				</nav>
			</aside>
			<main
				id="main-content"
				tabIndex={-1}
				className="w-full max-w-xl text-justify sm:pr-10 sm:border-r sm:border-border sm:order-1 font-sans font-light"
			>
				<div key={pathname} className="fade-in">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
