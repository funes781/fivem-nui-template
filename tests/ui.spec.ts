import { test, expect } from '@playwright/test';

test('UI should be responsive and match baseline', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot({
        fullPage: true,
        maxDiffPixelRatio: 0.1,
    });
});