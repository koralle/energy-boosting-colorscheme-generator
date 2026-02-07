import { expect, test } from "@playwright/test";

test("パターン未選択で次へを押したとき、バリデーションエラーが表示されること", async ({ page }) => {
  await page.goto("/input");

  const notice = page.getByText("パターンを選択してください", { exact: true });
  const nextButton = page.getByRole("button", { name: "次へ" });

  await expect(async () => {
    await nextButton.click();
    await expect(notice).toBeVisible({ timeout: 1000 });
  }).toPass({ timeout: 10000 });

  await expect(page).toHaveURL(/\/input\/?$/);
});

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
