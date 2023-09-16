import { MERGED_MAP } from "./data.js";

export function normalize(str: string) {
  let newStr = str.trim();
  newStr = [...newStr]
    .map((char) => {
      const replacementChar = MERGED_MAP.get(char);
      if (replacementChar !== undefined) {
        return replacementChar;
      }
      return char;
    })
    .join("");
  newStr = newStr.toLowerCase();
  return newStr;
}

export default normalize;
