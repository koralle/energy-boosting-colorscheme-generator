import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../../../components/Layout";
import { Page } from "./-components/page";

export const Route = createFileRoute("/(app)/complete")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}
