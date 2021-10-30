import getBoundingClientRect2 from "../../../unoptimized/lib/dom-utils/getBoundingClientRect.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import getWindowScroll2 from "../../../unoptimized/lib/dom-utils/getWindowScroll.js";
export default function getWindowScrollBarX(element) {
  return getBoundingClientRect2(getDocumentElement2(element)).left + getWindowScroll2(element).scrollLeft;
}
