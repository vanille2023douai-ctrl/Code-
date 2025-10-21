const { test, expect } = require('@playwright/test');

test.describe('Dynamic Board Generation', () => {
  test('should generate the board dynamically on game start', async ({ page }) => {
    // Navigate to the local game file
    await page.goto('file://' + __dirname + '/../monopolymarcherboursierfonctionel.html');

    // Wait for the startup menu to be visible
    await expect(page.locator('#startup-menu')).toBeVisible();

    // Start the game
    await page.locator('#start-game-button').click();

    // Wait for the game container to be visible and the startup menu to be hidden
    await expect(page.locator('#game-container')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#startup-menu')).toBeHidden();

    // Wait for the board to be populated
    // We can check if a few key cells exist to confirm generation
    await expect(page.locator('#cell-0')).toBeVisible(); // GO
    await expect(page.locator('#cell-1')).toBeVisible(); // First property
    await expect(page.locator('#cell-10')).toBeVisible(); // Jail
    await expect(page.locator('#cell-20')).toBeVisible(); // Free Parking
    await expect(page.locator('#cell-39')).toBeVisible(); // Last property

    // Check content of a specific cell to ensure it's rendered correctly
    await expect(page.locator('#cell-1 .cell-content .text-xs')).toHaveText('Boul. de Belleville');
    await expect(page.locator('#cell-1 .price-tag')).toHaveText('Prix: 60€');

    // Take a screenshot for visual confirmation
    await page.screenshot({ path: 'tests/screenshots/dynamic-board-generation.png' });
  });
});
