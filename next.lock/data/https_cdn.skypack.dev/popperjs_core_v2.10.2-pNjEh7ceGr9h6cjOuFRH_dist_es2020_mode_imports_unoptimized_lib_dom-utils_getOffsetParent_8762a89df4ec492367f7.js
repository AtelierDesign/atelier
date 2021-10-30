import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
import getComputedStyle2 from "../../../unoptimized/lib/dom-utils/getComputedStyle.js";
import {isHTMLElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
import isTableElement2 from "../../../unoptimized/lib/dom-utils/isTableElement.js";
import getParentNode2 from "../../../unoptimized/lib/dom-utils/getParentNode.js";
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName2(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
export default function getOffsetParent(element) {
  var window = getWindow2(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement2(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName2(offsetParent) === "html" || getNodeName2(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
