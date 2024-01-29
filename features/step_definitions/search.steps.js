const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page- {string}", async function (string) { // Открываем страницу
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day", async function (string) {  // Нужный день
  return await clickElement(this.page, ".page-nav__day:last-child", string);
});
When("The user selects the desired movie", async function (string) { //нужный фильм
  return await clickElement(this.page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a",string);
});
When("The user chooses a location", async function (string) {
    return await clickElement(this.page, ".buying-scheme__chair_standart", string);
});
When("The user has booked tickets", async function (string) { //
  return await clickElement(this.page, ".acceptin-button", string);
});
When("The user has confirmed the booking of tickets", async function (string) { //
  return await clickElement(this.page, ".acceptin-button", string);
});
Then("Is the QR code of the reservation visible", async function (string) { 
  const actual = await getText(page, ".ticket__hint");
  await expect(actual).toContain("Приятного просмотра!");
});

