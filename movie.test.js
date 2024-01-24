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
  test.skip("Zveropolis", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await page.click("[data-seance-time-stamp='1706115600']");
    await page.waitForSelector(".buying-scheme__chair + .buying-scheme__chair_vip");
    await page.click(".buying-scheme__chair + .buying-scheme__chair_vip");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
  })
  test.only("Mickey Mouse positive", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "[data-time-stamp='1706130000']");
    await clickElement(page, "[data-seance-id='189']");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5)");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(5)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
  }) 
  test.only("Mickey Mouse negative", async() =>{
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "[data-time-stamp='1706130000']");
    await clickElement(page, "[data-seance-id='189']");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5)");
    await clickElement(page, "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(5)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
  })
});

