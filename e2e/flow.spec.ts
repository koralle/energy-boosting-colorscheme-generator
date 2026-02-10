import { expect, test } from "@playwright/test";

[...Array(12)]
  .map((_, index) => index + 1)
  .forEach((patternId) => {
    test(
      `パターン${patternId}を選択して次へを押したとき、プレビュー画面に遷移すること`,
      async ({ page }) => {
        test.setTimeout(5_000);

        await page.goto("/");
        await page.getByRole("link", { name: "鑑定書作成を開始する" }).click();
        await expect(page.getByRole("heading", { name: "パターンを選択" })).toBeVisible();

        const patternButton = page.getByRole("radio", {
          name: new RegExp(`^パターン ${patternId}$`),
        });
        await patternButton.click();

        const nextButton = page.getByRole("button", { name: "プレビュー画面に移動" });
        await nextButton.click();

        await page.waitForURL(new RegExp(`/preview\\?patternId=${patternId}$`));
        await expect(page).toHaveURL(new RegExp(`/preview\\?patternId=${patternId}$`));

        await expect(page.getByRole("heading", { name: "プレビュー" })).toBeVisible();
        await expect(page.getByRole("button", { name: "印刷して完了" })).toBeVisible();
      },
    );
  });
