import * as cheerio from "cheerio";
import axios from "axios";

const url: string = "https://gdg.community.dev/events/details/google-gdg-benin-presents-devfest-benin-2023/"

axios.get(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html)
  $('p', html).each(function() {
    const tes = $(this).text();
    console.log(tes)
  })
})