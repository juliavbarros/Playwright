import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator('#CXQnmb div').filter({ hasText: 'Utilizamos cookies e dados paraFornecer e manter os serviços GoogleMonitorizar' }).nth(3).click();
});