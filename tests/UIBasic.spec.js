const { test, expect } = require('@playwright/test');

test('Open login page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.waitForTimeout(2000);
  await expect(page.locator('#userEmail')).toBeVisible({ timeout: 5000 });
});

test('Enter credentials and click login', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.fill('#userEmail', 'codeautomagic@test.com');
  await page.fill('#userPassword', '1234567890@Aa');
  await expect(page.locator('#userEmail')).toHaveValue('codeautomagic@test.com');
  const loginButton = page.getByRole('button', { name: /log ?in|sign ?in/i });
  await loginButton.waitFor({ state: 'visible', timeout: 10000 });
  await loginButton.click();
  await page.waitForTimeout(2000);
});
