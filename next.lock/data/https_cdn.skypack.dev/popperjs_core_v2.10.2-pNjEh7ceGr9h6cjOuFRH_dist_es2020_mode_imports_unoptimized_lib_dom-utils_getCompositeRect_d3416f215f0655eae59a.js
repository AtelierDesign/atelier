import getBoundingClientRect2 from "../../../unoptimized/lib/dom-utils/getBoundingClientRect.js";
import getNodeScroll2 from "../../../unoptimized/lib/dom-utils/getNodeScroll.js";
import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
import {isHTMLElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
import getWindowScrollBarX2 from "../../../unoptimized/lib/dom-utils/getWindowScrollBarX.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import isScrollParent2 from "../../../unoptimized/lib/dom-utils/isScrollParent.js";
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
export default function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement2(offsetParent);
  var rect = getBoundingClientRect2(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName2(offsetParent) !== "body" || isScrollParent2(documentElement)) {
      scroll = getNodeScroll2(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect2(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX2(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
