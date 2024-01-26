const {generateName} = require("./lib/util.js");
const { getText, putText, clickElement } = require("./lib/commands");
const { TestWatcher } = require("jest");

let page;

describe("Service for Movie tickets order", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  afterEach(() => {
    page.close();
  });
  test.skip("Zveropolis pozitive", async() =>{ //29.01 Успешное бронирование билета
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "[data-time-stamp='1706475600']");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1) > a");
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__hint");
    await expect(actual).toContain("Покажите QR-код нашему контроллеру для подтверждения бронирования.");
  })
  test.only("Mickey Mouse positive", async() =>{ //30.01 18:00
    await page.goto("http://qamid.tmweb.ru/client/index.php"); 
    await clickElement(page, "[data-time-stamp='1706562000']");
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a"); // Время
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__info");
    await expect(actual).toContain("30-01-2024");
  })
   test.skip("Mickey Mouse negative", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "body > nav > a.page-nav__day.page-nav__day_today.page-nav__day_chosen");
    await clickElement(page, "[data-seance-id='189']");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5)");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(5)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
  })
});