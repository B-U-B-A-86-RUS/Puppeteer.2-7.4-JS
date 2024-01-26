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
  test.only("Zveropolis", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span.buying-scheme__chair.buying-scheme__chair_vip");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span.buying-scheme__chair.buying-scheme__chair_vip");
    await page.waitForSelector(".buying-scheme__chair + .buying-scheme__chair_vip");
    await page.click(".buying-scheme__chair + .buying-scheme__chair_vip");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".ticket__info-qr");
    await expect(actual).toContain("Покажите QR-код нашему контроллеру для подтверждения бронирования.");
  })
  test.skip("Mickey Mouse positive", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "body > nav > a.page-nav__day.page-nav__day_today.page-nav__day_chosen");
    await clickElement(page, "[data-seance-id='199']");
    await clickElement(page, ".buying-scheme__chair_standart")
    await clickElement(page, ".buying-scheme__chair_standart")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
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

