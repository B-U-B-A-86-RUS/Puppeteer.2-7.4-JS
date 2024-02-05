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

Given("user is on page1- {string}", async function (string) {return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {setTimeout: 50000,});});
When("The user selects the desired day", async function () {return await clickElement(this.page, ".page-nav__day:last-child");});
When("The user selects the desired movie", async function () {return await clickElement(this.page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");});
When("The user chooses a location", async function () {return await clickElement(this.page, ".buying-scheme__chair_standart");});
When("The user has booked tickets", async function () {return await clickElement(this.page, ".acceptin-button");});
When("The user has confirmed the booking of tickets", async function () {return await clickElement(this.page, ".acceptin-button");});
Then("Is the QR code of the reservation visible1", async function (string) 
{const actual = await getText(page, ".ticket__hint");
 await expect(actual).toContain("Покажите QR-код нашему контроллеру для подтверждения бронирования.");});

Given("user is on page2- {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
When("The user selects the desired movie", async function () {
  return await clickElement(
    this.page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
});
When("The user chooses a location", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
When("The user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
When("The user has confirmed the booking of tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Is the QR code of the reservation visible2", async function (string) {
  const actual = await getText(page, ".ticket__hint");
  await expect(actual).toContain("Приятного просмотра!");
});

Given("user is on page3- {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
When("The user selects the desired movie2", async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a"
  );
});
When("The user selects the occupied place", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
When("The user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
When("The user has confirmed the booking of tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Is the QR code of the reservation visible neg", async function (string) {
  const actual = await getText(page, ".ticket__hint");
  await expect(actual).toContain("Выбранное Вами место уже занято");
});