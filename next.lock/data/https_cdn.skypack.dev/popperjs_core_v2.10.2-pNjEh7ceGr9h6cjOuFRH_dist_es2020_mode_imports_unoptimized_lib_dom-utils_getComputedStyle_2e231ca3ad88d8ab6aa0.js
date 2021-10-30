import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
export default function getComputedStyle(element) {
  return getWindow2(element).getComputedStyle(element);
}
