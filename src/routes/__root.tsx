import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div className="p-10 flex flex-col sm:flex-row sm:justify-end">
      <aside className="mb-8 sm:mb-0 sm:pl-10 sm:w-40 sm:order-2 font-serif font-light">
        <nav className="flex flex-row justify-end gap-2 pb-4 border-b border-[#dee2e6] sm:flex-col sm:border-b-0 sm:pb-0 sm:sticky sm:top-10">
          <Link to="/" className="text-[#adb5bd] [&.active]:text-[#343a40]">
            about
          </Link>
          <Link
            to="/reflections"
            className="text-[#adb5bd] [&.active]:text-[#343a40]"
          >
            reflections
          </Link>
          <Link
            to="/projects"
            className="text-[#adb5bd] [&.active]:text-[#343a40]"
          >
            projects
          </Link>
        </nav>
      </aside>
      <main className="max-w-4xl text-right sm:pr-10 sm:border-r sm:border-[#dee2e6] sm:order-1 font-sans font-light">
        <Outlet />
      </main>
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
