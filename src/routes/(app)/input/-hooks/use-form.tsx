import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "../-contexts/form-context";

export const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {},
  formComponents: {},
});
