
const { test, expect } = require('@playwright/test');

test.describe('Monopoly Board Cell Type Editor', () => {
  test('should allow changing a property to a tax space', async ({ page }) => {
    await page.goto('http://localhost:3000/monopolymarcherboursierfonctionel.html');

    // Enable Editor Mode
    await page.locator('#board-editor-mode').check();
    await page.locator('#start-game-button').click();

    // Wait for a specific cell to be rendered, giving it a longer timeout to account for animations.
    await expect(page.locator('#cell-1')).toBeVisible({ timeout: 10000 });

    // 1. Open the editor for 'Boul. de Belleville' (cell-1)
    await page.locator('#cell-1').click();

    // Wait for the editor modal to appear
    await expect(page.locator('.swal2-title')).toHaveText('Éditer: Boul. de Belleville');

    // 2. Change the type to 'TAX'
    await page.locator('#swal-prop-type').selectOption('TAX');

    // 3. Verify that the fine input is now visible and set a value
    const fineInput = page.locator('#swal-prop-fine');
    await expect(fineInput).toBeVisible();
    await fineInput.fill('500');

    // Also change the name for verification
    await page.locator('#swal-prop-name').fill('Super Taxe');

    // 4. Save the changes
    await page.locator('.swal2-confirm').click();

    // 5. Verify the cell on the board has updated
    const updatedCell = page.locator('#cell-1');

    // Check for the new name and the tax amount text
    await expect(updatedCell).toContainText('Super Taxe');
    await expect(updatedCell).toContainText('Payez 500€');

    // Ensure property-specific elements are gone
    await expect(updatedCell.locator('.price-tag')).not.toBeVisible();
    await expect(updatedCell.locator('.color-bar-top-bottom')).not.toBeVisible();
  });
});
