import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

const RootDocument = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools config={{ position: 'bottom-right' }} plugins={[ {name: 'TanStack Router', render: <TanStackRouterDevtoolsPanel /> }]} />
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  shellComponent: RootDocument
});
