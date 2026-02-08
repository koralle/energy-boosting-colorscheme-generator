import { expect, type Page, test } from "@playwright/test";

async function openPreviewForPattern(page: Page, patternId: number) {
  await page.goto("/");
  await page.getByRole("link", { name: "鑑定書作成を開始する" }).click();
  await expect(page.getByRole("heading", { name: "パターンを選択" })).toBeVisible();

  const patternButton = page.getByRole("button", {
    name: new RegExp(`^パターン ${patternId}$`),
  });
  await expect(async () => {
    await patternButton.click();
    await expect(page.getByText(new RegExp(`選択中:\\s*パターン\\s*${patternId}`))).toBeVisible({
      timeout: 1000,
    });
  }).toPass({ timeout: 10000 });

  const nextButton = page.getByRole("button", { name: "次へ" });
  await expect(async () => {
    await nextButton.click();
    await expect(page).toHaveURL(new RegExp(`/preview\\?patternId=${patternId}$`), {
      timeout: 1000,
    });
  }).toPass({ timeout: 10000 });

  await expect(page).toHaveURL(new RegExp(`/preview\\?patternId=${patternId}$`));
  await expect(page.getByRole("heading", { name: "プレビュー" })).toBeVisible();
}

test.describe("P0 data correctness", () => {
  test("パターン1を選択したとき、正しいデータが表示されること", async ({ page }) => {
    await openPreviewForPattern(page, 1);

    const energyDownSection = page.locator("section", {
      hasText: "エネルギーが落ちる年",
    });
    await expect(energyDownSection.getByText("子、丑、-", { exact: true })).toBeVisible();

    const tabooSection = page.locator("section", {
      hasText: "タブー色（薬色）",
    });
    await expect(tabooSection.getByText("ブルー", { exact: true })).toBeVisible();

    await expect(
      page.getByText("ピンク系の花柄の絨毯を、部分的に取り入れると活力が湧きます。", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("パターン10を選択したとき、正しいデータが表示されること", async ({ page }) => {
    await openPreviewForPattern(page, 10);

    const energyDownSection = page.locator("section", {
      hasText: "エネルギーが落ちる年",
    });
    await expect(energyDownSection.getByText("申、酉、-", { exact: true })).toBeVisible();

    const tabooSection = page.locator("section", {
      hasText: "タブー色（薬色）",
    });
    await expect(tabooSection.getByText("ブラウン", { exact: true })).toBeVisible();

    await expect(
      page.getByText(
        "ひとりの時間を、楽しみ自由になる時間と空間のある部屋で快適に過ごすことができます。",
        {
          exact: true,
        },
      ),
    ).toBeVisible();
  });
});
