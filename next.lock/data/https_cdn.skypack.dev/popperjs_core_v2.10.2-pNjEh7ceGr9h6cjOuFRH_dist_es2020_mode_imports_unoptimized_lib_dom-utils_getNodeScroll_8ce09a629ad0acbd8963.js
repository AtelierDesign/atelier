import getWindowScroll2 from "../../../unoptimized/lib/dom-utils/getWindowScroll.js";
import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
import {isHTMLElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
import getHTMLElementScroll2 from "../../../unoptimized/lib/dom-utils/getHTMLElementScroll.js";
export default function getNodeScroll(node) {
  if (node === getWindow2(node) || !isHTMLElement(node)) {
    return getWindowScroll2(node);
  } else {
    return getHTMLElementScroll2(node);
  }
}
