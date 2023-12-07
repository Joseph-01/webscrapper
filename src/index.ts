import * as cheerio from "cheerio";
import axios from "axios";
import { day, dayToChoose, dayToReturn, getMonthName, month } from "./app";
import { findLinkWithWord } from "./middlewares/findLink";


const url: string = `https://www.thedevotionals.com.ng/devotional/rhapsody-of-realities/`;



async function scrapper() {
  const urltoscrape = await crawler(url);
  console.log(urltoscrape)
}

async function crawler(url) {
  const response = await axios.get(url)
  const html = await response.data
  const $ = cheerio.load(html);
  const links = $('a').map((i, link) => link.attribs.href).get();
  const result = findLinkWithWord(links, "rhapsody")
  return result + `-for-${dayToChoose}-${dayToReturn(day)}-${getMonthName(month)}-2023`;
}

scrapper()