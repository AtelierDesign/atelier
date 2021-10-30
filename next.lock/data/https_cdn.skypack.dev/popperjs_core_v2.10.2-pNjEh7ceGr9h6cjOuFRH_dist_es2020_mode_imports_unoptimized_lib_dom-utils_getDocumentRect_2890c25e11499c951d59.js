import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import getComputedStyle2 from "../../../unoptimized/lib/dom-utils/getComputedStyle.js";
import getWindowScrollBarX2 from "../../../unoptimized/lib/dom-utils/getWindowScrollBarX.js";
import getWindowScroll2 from "../../../unoptimized/lib/dom-utils/getWindowScroll.js";
import {max} from "../../../unoptimized/lib/utils/math.js";
export default function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement2(element);
  var winScroll = getWindowScroll2(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX2(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
