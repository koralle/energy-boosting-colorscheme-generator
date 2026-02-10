import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:6777",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    launchOptions: {
      slowMo: 250,
    },
  },
  workers: 4,
  reporter: "html",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "mobile-pixel-7",
    //   use: { ...devices["Pixel 7"] },
    // },
    // {
    //   name: "mobile-iphone-15",
    //   use: { ...devices["iPhone 15"] },
    // },
    // {
    //   name: "tablet-ipad-gen11",
    //   use: { ...devices["iPad (gen 11)"] },
    // },
    // {
    //   name: "tablet-ipad-gen11-landscape",
    //   use: { ...devices["iPad (gen 11) landscape"] },
    // },
  ],
  webServer: {
    command: "bun vite dev --host 127.0.0.1 --port 6777",
    url: "http://127.0.0.1:6777",
    reuseExistingServer: !process.env["CI"],
  },
});
