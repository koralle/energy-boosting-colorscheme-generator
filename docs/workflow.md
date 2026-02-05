# 作業フロー

## UI/UXデザインの改善

1. bun run storybookでStorybookを起動する
2. agent-browserでStorybookにアクセスし、ストーリーを確認
3. スクリーンショットを撮って視覚的な結果を確認
4. 問題なければStorybookを終了する
5. 静的解析・型チェック実行: bun run check && bun run typecheck
6. bun run test:storybook を実行してテストする

## 機能の改善

1. bun run devで開発サーバーを起動する
2. agent-browserで開発サーバーにアクセスし、画面操作を検証
3. スクリーンショットを撮って視覚的な結果を確認
4. 問題なければ開発サーバーを終了する
5. 静的解析・型チェック実行: bun run check && bun run typecheck
6. bun run test を実行してテストする
