import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import { patternIdSchema } from "../../../types/pattern";
import { Page } from "./-components/page";

// 検索パラメータのバリデーション
const patternSearchSchema = v.object({
  patternId: patternIdSchema,
});

export const Route = createFileRoute("/(app)/preview")({
  component: RouteComponent,
  validateSearch: patternSearchSchema,
  errorComponent: () => <h1>Error!</h1>,
});

function RouteComponent() {
  const { patternId } = Route.useSearch();
  return <Page patternId={patternId} />;
}
