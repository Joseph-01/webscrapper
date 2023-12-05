import * as cheerio from "cheerio";
import axios from "axios";


const url: string = `https://www.thedevotionals.com.ng/devotional/rhapsody-of-realities/`;

async function crawler(url) {
  const response = await axios.get(url)
  const html = await response.data
  console.log(html);
}

crawler(url)