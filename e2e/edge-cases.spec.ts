import { expect, test } from "@playwright/test";

test("入力画面の初期状態で次へを押したとき、プレビュー画面に遷移すること", async ({ page }) => {
  await page.goto("/input");

  const patternButton = page.getByRole("radio", { name: /^パターン 1$/ });
  const nextButton = page.getByRole("button", { name: "次へ" });

  await expect(async () => {
    await expect(patternButton).toBeChecked({ timeout: 1000 });
    await nextButton.click();
    await expect(page).toHaveURL(/\/preview\?patternId=1(?:$|&)/, { timeout: 1000 });
  }).toPass({ timeout: 10000 });

  await expect(page).toHaveURL(/\/preview\?patternId=1(?:$|&)/);
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
