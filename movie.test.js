const {generateName} = require("./lib/util.js");
const { getText, putText, clickElement } = require("./lib/commands");
const { TestWatcher } = require("jest");
const { expect } = require("chai");

let page;

describe("Service for Movie tickets order", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  afterEach(() => {
    page.close();
  });
  test.skip("Zveropolis pozitive", async() =>{ //
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__hint");
    await expect(actual).toContain("Покажите QR-код нашему контроллеру для подтверждения бронирования.");
  })
  test.only("Mickey Mouse positive", async() =>{ //
    await page.goto("http://qamid.tmweb.ru/client/index.php"); 
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a"); // Время
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__hint");
    await expect(actual).toContain("Приятного просмотра!");
  })
   test.only("Mickey Mouse negative", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a");
    await clickElement(page, ".buying-scheme__chair_selected");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(5)");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__hint");
    await expect(actual).toContain("Выыбранно Вами место уже занято");
  })
});