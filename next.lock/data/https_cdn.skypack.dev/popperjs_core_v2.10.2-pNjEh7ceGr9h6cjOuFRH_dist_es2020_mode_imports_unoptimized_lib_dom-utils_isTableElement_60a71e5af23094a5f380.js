import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
export default function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName2(element)) >= 0;
}
