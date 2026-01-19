import { createFileRoute } from "@tanstack/react-router";
import { Page } from "./-components/page";

export const Route = createFileRoute("/(app)/complete")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
