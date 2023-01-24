import unidecode from "unidecode";
// breed uri converter example : American buldog -> american-buldog
export default function breedUriParser(name: string) {
  const copy = unidecode(name).split("");
  for (let i = 0; i < name.length; i++) {
    if (copy[i] == " ") {
      copy[i] = "-";
    }
  }
  return ("https://www.akc.org/dog-breeds/" + copy.join("")).toLowerCase();
}

export function simpleDecode(name: string): string {
  const copy = unidecode(name).split("");
  for (let i = 0; i < name.length; i++) {
    if (copy[i] == " ") {
      copy[i] = "-";
    }
  }
  return copy.join("").toLowerCase();
}
