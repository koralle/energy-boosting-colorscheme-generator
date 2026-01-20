import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  type NavigateOptions,
  Outlet,
  type RouteById,
  type RouteIds,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { getRouter } from "../router";

const router = getRouter();

export type ExtractRouteOptions<TId extends RouteIds<(typeof router)["routeTree"]>> = Omit<
  NavigateOptions<typeof router, string, TId>,
  "to" | "search" | "params"
> & {
  search?: Partial<RouteById<(typeof router)["routeTree"], TId>["types"]["fullSearchSchema"]>;
} & (RouteById<(typeof router)["routeTree"], TId>["types"]["allParams"] extends Record<
    string,
    never
  >
    ? { params?: undefined }
    : {
        params: RouteById<(typeof router)["routeTree"], TId>["types"]["allParams"];
      });

/**
 * A utility component to wrap children with a mocked router for testing purposes.
 * It allows you to specify the initial route, search parameters, and route parameters.
 *
 * @param children - The child components to be rendered within the router context.
 * @param routeId - The ID of the route to navigate to initially.
 * @param search - Optional search parameters for the route.
 * @param params - Optional route parameters.
 *
 * @returns A RouterProvider component that provides the mocked router context.
 */
export const WithRouter = <
  TRouter extends typeof router,
  const TId extends RouteIds<TRouter["routeTree"]>,
>({
  children,
  routeId,
  search,
  params,
}: React.PropsWithChildren<
  {
    routeId: TId;
  } & ExtractRouteOptions<TId>
>) => {
  const history = createMemoryHistory();
  const rootRoute = createRootRoute({
    component: () => (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  });
  const mockedRouter = createRouter({
    history,
    routeTree: rootRoute.addChildren([
      createRoute({
        getParentRoute: () => rootRoute,
        path: routeId,
        component: () => children,
      }),
    ]),
  });

  mockedRouter.navigate({
    to: routeId.replace(/\/$/, ""),
    search,
    params,
  } as any);

  return <RouterProvider router={mockedRouter} />;
};
