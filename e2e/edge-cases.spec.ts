import { expect, test } from "@playwright/test";

test("不正なpatternIdでプレビューを開いたとき、エラー画面が表示されること", async ({ page }) => {
  await page.goto("/preview?patternId=abc");
  await expect(page.getByRole("heading", { name: "Error!", exact: true })).toBeVisible();
});

test("範囲外のpatternIdでプレビューを開いたとき、エラー画面が表示されること", async ({ page }) => {
  await page.goto("/preview?patternId=999");
  await expect(page.getByRole("heading", { name: "Error!", exact: true })).toBeVisible();
});

test("patternIdなしでプレビューを開いたとき、エラー画面が表示されること", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Error!", exact: true })).toBeVisible();
});
