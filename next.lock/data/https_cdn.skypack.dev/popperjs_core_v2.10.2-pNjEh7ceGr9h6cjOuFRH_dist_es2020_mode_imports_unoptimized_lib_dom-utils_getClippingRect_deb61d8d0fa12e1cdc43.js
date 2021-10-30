import {viewport} from "../../../unoptimized/lib/enums.js";
import getViewportRect2 from "../../../unoptimized/lib/dom-utils/getViewportRect.js";
import getDocumentRect2 from "../../../unoptimized/lib/dom-utils/getDocumentRect.js";
import listScrollParents2 from "../../../unoptimized/lib/dom-utils/listScrollParents.js";
import getOffsetParent2 from "../../../unoptimized/lib/dom-utils/getOffsetParent.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import getComputedStyle2 from "../../../unoptimized/lib/dom-utils/getComputedStyle.js";
import {isElement, isHTMLElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
import getBoundingClientRect2 from "../../../unoptimized/lib/dom-utils/getBoundingClientRect.js";
import getParentNode2 from "../../../unoptimized/lib/dom-utils/getParentNode.js";
import contains2 from "../../../unoptimized/lib/dom-utils/contains.js";
import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
import rectToClientRect2 from "../../../unoptimized/lib/utils/rectToClientRect.js";
import {max, min} from "../../../unoptimized/lib/utils/math.js";
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect2(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect2(getViewportRect2(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect2(getDocumentRect2(getDocumentElement2(element)));
}
function getClippingParents(element) {
  var clippingParents = listScrollParents2(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent2(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents.filter(function(clippingParent) {
    return isElement(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName2(clippingParent) !== "body";
  });
}
export default function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
