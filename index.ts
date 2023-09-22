import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
import { chromium } from 'playwright';


async function main() {
    const antivirus = path.join(__dirname, '../ext_antivirus');
    const impersonator = path.join(__dirname, '../ext_impersonator');
    const userDataDir = path.join(__dirname, '../test-user-data-dir');
    const browser = await chromium.launchPersistentContext(
        userDataDir,
        {
            headless: false,
            // args: [`--disable-extensions-except=${impersonator},${antivirus}`], 
            // ignoreDefaultArgs: ['--disable-component-extensions-with-background-pages'],  
        }
    )

    let page = await browser.newPage()

    await page.goto('http://yandex.ru')
}

main();

