const puppeteer = require('puppeteer');
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
    // data is already parsed as JSON:
    // for(let i in data) {
    //   console.log(i);
    // }
    console.log(JSON.parse(data));
  }
});

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://disjfa.github.io/bootstrap-blocks/');
//   await page.screenshot({path: 'example.png'});
//
//   await browser.close();
// })();
