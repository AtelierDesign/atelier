import hyphenate2 from "../../unoptimized/esm/hyphenate.js";
var msPattern = /^ms-/;
export default function hyphenateStyleName(string) {
  return hyphenate2(string).replace(msPattern, "-ms-");
}
