const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request');
const baseUrl = 'https://disjfa.github.io/bootstrap-blocks';

request.get({
  url: baseUrl + '/api/pages.json',
  json: true,
  headers: { 'User-Agent': 'request' }
}, (err, res, data) => {
  if (err) {
    console.error('Error:', err);
  } else if (res.statusCode !== 200) {
    console.error('Status:', res.statusCode);
  } else {
    for (let i of data) {
      const folderName = 'screenshot' + i.base;
      console.log(folderName);
      fs.mkdir(folderName, { recursive: true }, (err) => {
        if (err) throw err;
      });

      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
          width: 1280,
          height: 960,
          deviceScaleFactor: 1,
        });
        await page.goto('https://disjfa.github.io' + i.url);
        await page.screenshot({ path: folderName + '/screenshot.png' });

        await browser.close();
      })();
    }
  }
});

