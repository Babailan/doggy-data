import cheerio from "cheerio";
import axios from "axios";
import breedUriParser from "./breed-uri";

export default async function grabData(
  name: string,
  index?: number
): Promise<{ result: string; approve: boolean }> {
  try {
    const result = await axios.get(breedUriParser(name));
    const $ = cheerio.load(result.data);
    const propsData = $("[data-js-component=breedPage]").attr(
      "data-js-props"
    ) as string;
    console.log("Completed : " + breedUriParser(name));
    return { result: propsData, approve: true };
  } catch (error) {
    return { result: "", approve: false };
  }
}
