import { test } from '@playwright/test';

test('Extract specific cell: Row 2, Column 2', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#taskTable');
    const row2 = table.locator('tbody tr').nth(1); // Row 2 (index 1)
    const col2 = row2.locator('td').nth(1);        // Column 2 (index 1)

    const text = await col2.textContent();
    console.log('Data in Row 2, Column 2:', text?.trim());
});
