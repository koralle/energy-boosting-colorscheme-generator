import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../../components/Layout";
import { Page } from "./-page";

export const Route = createFileRoute("/(app)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}
