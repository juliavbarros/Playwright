const { expect } = require ('@playwright/test');

const abrirSite = async (page) => {
    await page.goto('https://automationpratice.com.br/login');
}

const logarComSucesso = async (page) => {
    await page.locator('#user').fill('juliavalenteb@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
}

const verificarSeLogado = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
}

const logarEmailVazio = async (page) => {
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
}

const validarEmailInvalido = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
}

const logarSenhaVazia = async (page) => {
    await page.locator('#user').fill('juliavalenteb@gmail.com');
    await page.getByRole('button', { name: 'login' }).click();
}

const validarSenhaInvalida = async (page) => {
    await expect(page.getByText('Senha inválida.' )).toBeVisible({timeout: 1000});
}

module.exports = {
    abrirSite,
    logarComSucesso,
    verificarSeLogado,
    logarEmailVazio,
    validarEmailInvalido,
    logarSenhaVazia,
    validarSenhaInvalida
}