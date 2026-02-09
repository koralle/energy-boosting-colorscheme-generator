import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Layout } from "../../../components/Layout";
import { Page } from "./-components/page";

export const Route = createFileRoute("/(app)/input")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: "/input" });

  return (
    <Layout>
      <Page onSubmitForm={({ patternId }) => navigate({ to: `/preview?patternId=${patternId}` })} />
    </Layout>
  );
}
