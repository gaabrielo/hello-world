import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      {/* <footer className="px-16 not-md:px-4 pt-28 pb-12 text-zinc-500 flex gap-1.5 bg-zinc-950">
        <p>Copyright {new Date().getFullYear()}</p>
        <span>//</span>
        <Link
          to="/privacy-policy"
          className="hover:text-zinc-100 transition-all"
        >
          Privacy policy
        </Link>
        <span>//</span>
        <Link to="/faq" className="hover:text-zinc-100 transition-all">
          FAQ
        </Link>
      </footer> */}
      {/* <TanStackRouterDevtools /> */}
    </React.Fragment>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
