import puppeteer from 'puppeteer';

let browser;
try {
	console.log('launching browser');
	browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	console.log('creating page');
	const page = await browser.newPage();

	console.log('navigating');
	await page.goto('https://example.com');
	
	console.log('getting element');
	const element = await page.$('div');

	console.log('getting contents');
	const contents = await element.evaluate(el => el.textContent);
	
	console.log(contents);
} finally {
	if (browser) {
		await browser.close();
	}
}
