const { executablePath } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs')
const numberOfRuns = 10;
// by Dtuna2830 !!!
// dont skid

const torProxy = 'socks5://127.0.0.1:9050';
(async () => {
    const email = generateRandomname();
  const pathToExtension = require('path').join(__dirname, 'CapSolver.Browser.Extension');
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({
    headless: false,
    args: [
//      `--proxy-server=${torProxy}`,
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
    executablePath: executablePath(),
  });

  const [page] = await browser.pages();
  const randomPassword = generateRandomPassword();
  const randomname = generateRandomname();
  const randomnamelast = generateRandomname();


  page.setDefaultTimeout(0);
  await page.goto('https://signup.live.com/signup')
  
  await page.waitForSelector('input#MemberName', );
  await page.type('input#MemberName', `${email}@outlook.com`);

  await page.waitForSelector('input#iSignupAction',);
  await page.evaluate(() => {
    const button = document.querySelector('input#iSignupAction');
    if (button) {
      button.click();
    }
  });

  await page.waitForSelector('input#PasswordInput',);
  await page.type('input#PasswordInput', randomPassword);

  await page.waitForSelector('input#iSignupAction',);
  await page.evaluate(() => {
    const button = document.querySelector('input#iSignupAction');
    if (button) {
      button.click();
    }
  });

  await page.waitForSelector('input#FirstName');
  await page.type('input#FirstName', randomname);

  await page.waitForSelector('input#LastName');
  await page.type('input#LastName', randomname);

  await page.waitForSelector('input#iSignupAction');
  await page.evaluate(() => {
    const button = document.querySelector('input#iSignupAction');
    if (button) {
      button.click();
    }
  });


  await page.waitForSelector('select#BirthMonth');
  await page.select('select#BirthMonth', '3');

  await page.waitForSelector('select#BirthDay');
  await page.select('select#BirthDay', '3');

  await page.waitForSelector('input#BirthYear');
  await page.type('input#BirthYear', '1999');
  
  await page.waitForSelector('input#iSignupAction');
  await page.evaluate(() => {
    const button = document.querySelector('input#iSignupAction');
    if (button) {
      button.click();
    }
  });
  
  await page.waitForSelector('button.ms-Button.ms-Button--primary');
  await page.evaluate(() => {
    const button = document.querySelector('button.ms-Button.ms-Button--primary');
    if (button) {
      button.click();
      button.click();
    }
  });




page.goto('https://www.xbox.com/tr-TR/')

await page.waitForNavigation();
await page.waitForSelector('#mectrl_headerPicture');
await page.evaluate(() => {
  const button = document.querySelector('div.mectrl_topHeader');
  if (button) {
    button.click();
  }
});





await page.waitForSelector('input#idSIButton9');
await page.evaluate(() => {
  const button = document.querySelector('input#idSIButton9');
  if (button) {
    button.click();
  }
});









writeToTextFile(`${email}@outlook.com:${randomPassword}`)
console.log(`${email}@outlook.com:${randomPassword} yazdırıldı ve oluşturuldu`)



})();


function generateRandomPassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

function generateRandomname(length = 15) {
  const charset = "abcdefghijklmnopqrstuvwxyz";
  let name = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    name += charset.charAt(randomIndex);
  }

  return name;
}

function writeToTextFile(content) {
  fs.appendFileSync('acc.txt', content + '\n');
}

