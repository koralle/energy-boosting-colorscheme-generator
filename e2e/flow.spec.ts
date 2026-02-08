import { expect, test } from "@playwright/test";

test("パターンを選択して次へを押したとき、プレビュー画面に遷移すること", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "鑑定書作成を開始する" }).click();

  const patternButton = page.getByRole("radio", { name: /^パターン 1$/ });
  await expect(async () => {
    await expect(patternButton).toBeChecked({ timeout: 1000 });
    await expect(page.getByText(/選択中:\s*パターン\s*1/)).toBeVisible({ timeout: 1000 });
  }).toPass({ timeout: 10000 });

  const nextButton = page.getByRole("button", { name: "次へ" });
  await expect(async () => {
    await nextButton.click();
    await expect(page).toHaveURL(/\/preview\?patternId=1(?:$|&)/, { timeout: 1000 });
  }).toPass({ timeout: 10000 });

  await expect(page).toHaveURL(/\/preview\?patternId=1(?:$|&)/);
  await expect(page.getByRole("heading", { name: "プレビュー" })).toBeVisible();
  await expect(page.getByRole("button", { name: "印刷して完了" })).toBeVisible();
});
