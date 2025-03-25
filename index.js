import { CrexiScraper } from './src/scraper.js';

(async () => {
    const rootUrl = "";
    const query = "Seattle";
    const crexiScraper = new CrexiScraper(rootUrl);

    const properties = await crexiScraper.scrape(query);
    console.log(properties);

    return properties;
})();
