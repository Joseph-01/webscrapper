import * as cheerio from "cheerio";
import axios from "axios";
import { day, dayToReturn } from "./middlewares/today";
import { findLinkWithWord } from "./middlewares/findLink";

const url: string = `https://www.thedevotionals.com.ng/devotional/rhapsody-of-realities/`;

async function scrapper() {
  const urltoscrape = await crawler(url);
  const response = await axios.get(urltoscrape);
  const html = await response.data;
  const $ = cheerio.load(html);
  const d = [];

  $("p").each((i, li) => {
    d.push($(li).text());
  });
}

async function crawler(url) {
  try {
    const response = await axios.get(url);
    const html = await response.data;
    const $ = cheerio.load(html);
    const links = $("a")
      .map((i, link) => link.attribs.href)
      .get()
      .slice(-82);
    const result = findLinkWithWord(links, `${dayToReturn(day)}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

scrapper();
// crawler(url)
