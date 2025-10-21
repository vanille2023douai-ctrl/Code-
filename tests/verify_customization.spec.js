const { test, expect } = require('@playwright/test');

test.describe('Advanced Rules and Board Editor Interaction', () => {
  test('Property editor should show 11 rent fields when Eiffel Tower Mode is active', async ({ page }) => {
    // Navigate to the local game file
    await page.goto('file://' + __dirname + '/../monopolymarcherboursierfonctionel.html');

    // Wait for the startup menu to be visible
    await expect(page.locator('#startup-menu')).toBeVisible();

    // Enable Board Editor Mode
    await page.locator('#board-editor-mode').check();
    await expect(page.locator('#board-editor-mode')).toBeChecked();

    // Enable Eiffel Tower Mode
    await page.locator('#eiffel-tower-mode').check();
    await expect(page.locator('#eiffel-tower-mode')).toBeChecked();

    // Start the game
    await page.locator('#start-game-button').click();

    // Wait for the game container to be visible and the startup menu to be hidden
    await expect(page.locator('#game-container')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#startup-menu')).toBeHidden();

    // Click on the first property to open the editor
    await page.locator('#cell-1').click();

    // The property editor is a Swal.fire modal. We need to wait for it to appear.
    await expect(page.locator('.swal2-popup')).toBeVisible();
    await expect(page.locator('.swal2-title')).toHaveText('Éditer: Boul. de Belleville');

    // Verify that all 11 rent input fields are present
    const rentLabels = ['Base', '1M', '2M', '3M', '4M', 'Hôtel', 'H+1', 'H+2', 'H+3', 'H+4', 'Tour'];
    for (let i = 0; i < rentLabels.length; i++) {
      await expect(page.locator(`label[for="swal-prop-rent-${i}"]`)).toHaveText(rentLabels[i]);
      await expect(page.locator(`#swal-prop-rent-${i}`)).toBeVisible();
    }

    // Take a screenshot for visual confirmation
    await page.screenshot({ path: 'tests/screenshots/eiffel-tower-editor-with-11-rents.png' });

    // Close the modal
    await page.locator('.swal2-confirm').click();
    await expect(page.locator('.swal2-popup')).toBeHidden();
  });

  test('Property editor should show 6 rent fields when Eiffel Tower Mode is inactive', async ({ page }) => {
    // Navigate to the local game file
    await page.goto('file://' + __dirname + '/../monopolymarcherboursierfonctionel.html');

    // Wait for the startup menu to be visible
    await expect(page.locator('#startup-menu')).toBeVisible();

    // Enable Board Editor Mode
    await page.locator('#board-editor-mode').check();
    await expect(page.locator('#board-editor-mode')).toBeChecked();

    // Ensure Eiffel Tower Mode is NOT checked
    if (await page.locator('#eiffel-tower-mode').isChecked()) {
      await page.locator('#eiffel-tower-mode').uncheck();
    }
    await expect(page.locator('#eiffel-tower-mode')).not.toBeChecked();

    // Start the game
    await page.locator('#start-game-button').click();

    // Wait for the game container to be visible
    await expect(page.locator('#game-container')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#startup-menu')).toBeHidden();

    // Click on the first property to open the editor
    await page.locator('#cell-1').click();

    // Wait for the editor modal
    await expect(page.locator('.swal2-popup')).toBeVisible();
    await expect(page.locator('.swal2-title')).toHaveText('Éditer: Boul. de Belleville');

    // Verify that the 6 standard rent input fields are present
    const rentLabels = ['Base', '1 Maison', '2 Maisons', '3 Maisons', '4 Maisons', 'Hôtel'];
    for (let i = 0; i < rentLabels.length; i++) {
      await expect(page.locator(`label[for="swal-prop-rent-${i}"]`)).toBeVisible();
      await expect(page.locator(`#swal-prop-rent-${i}`)).toBeVisible();
    }

    // Verify that the 7th field (H+1) does NOT exist
    await expect(page.locator('#swal-prop-rent-6')).toBeHidden();

    // Take a screenshot for visual confirmation
    await page.screenshot({ path: 'tests/screenshots/standard-editor-with-6-rents.png' });
  });
});
