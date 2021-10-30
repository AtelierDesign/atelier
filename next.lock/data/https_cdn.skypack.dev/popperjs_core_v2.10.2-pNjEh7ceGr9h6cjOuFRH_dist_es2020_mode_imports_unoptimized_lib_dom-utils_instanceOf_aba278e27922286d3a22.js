import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
function isElement(node) {
  var OwnElement = getWindow2(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow2(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
export {isElement, isHTMLElement, isShadowRoot};
export default null;
