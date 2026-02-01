import * as v from "valibot";
import { patternIdSchema } from "../../../../types/pattern";

export const formSchema = v.object({
  patternId: v.pipe(patternIdSchema),
});

export type FormSchema = v.InferOutput<typeof formSchema>;
