import { expect, test } from "@playwright/test";

test.skip("入力画面を表示したとき、タッチターゲットが44px以上であること", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/input");

  const nextButton = page.getByRole("button", { name: "次へ" });
  await expect(nextButton).toBeVisible();

  const nextButtonBox = await nextButton.boundingBox();
  if (!nextButtonBox) {
    throw new Error("次へボタンのbounding boxを取得できませんでした");
  }
  expect(nextButtonBox.width).toBeGreaterThanOrEqual(44);
  expect(nextButtonBox.height).toBeGreaterThanOrEqual(44);

  const pattern1Button = page.getByRole("radio", { name: /^パターン 1$/ });
  await expect(pattern1Button).toBeVisible();
  const pattern1ButtonBox = await pattern1Button.boundingBox();
  if (!pattern1ButtonBox) {
    throw new Error("パターン1カードのbounding boxを取得できませんでした");
  }
  expect(pattern1ButtonBox.width).toBeGreaterThanOrEqual(44);
  expect(pattern1ButtonBox.height).toBeGreaterThanOrEqual(44);
});

test.skip("プレビュー画面を開いたとき、手書き欄のラベルが表示されること", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "鑑定書作成を開始する" }).click();

  const patternButton = page.getByRole("radio", { name: /^パターン 2$/ });
  await patternButton.click();

  const nextButton = page.getByRole("button", { name: "次へ" });
  await nextButton.click();
  await expect(page).toHaveURL(/\/preview\?patternId=2(?:$|&)/, { timeout: 1000 });

  await expect(page.getByText("名前")).toBeVisible();
  await expect(page.getByText("生年月日")).toBeVisible();
  await expect(page.getByText("守護色")).toBeVisible();
  await expect(page.getByText("今年のラッキーカラー")).toBeVisible();
  await expect(page.getByText("今年のタブーカラー")).toBeVisible();
});

test.skip("入力画面を表示したとき、横スクロールが発生しないこと", async ({ page }) => {
  await page.goto("/input");

  const hasNoHorizontalOverflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth <= root.clientWidth + 1;
  });

  expect(hasNoHorizontalOverflow).toBe(true);
});
