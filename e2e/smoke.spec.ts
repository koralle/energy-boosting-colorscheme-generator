import { expect, test } from "@playwright/test";

test("input page is visible", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "鑑定書作成を開始する" }).click();
  await expect(page.getByRole("heading", { name: "パターンを選択" })).toBeVisible();
  await expect(page.getByRole("button", { name: "次へ" })).toBeVisible();
});
