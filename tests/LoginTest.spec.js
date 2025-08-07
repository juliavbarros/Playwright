// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('juliavalenteb@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();

});

test('Login com email vazio', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'E-mail invalido' })).toBeVisible({timeout: 10000});
});

test('Login com senha vazia', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('juliavalenteb@gmail.com');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Senha inválida' })).toBeVisible({timeout: 1000});

});
