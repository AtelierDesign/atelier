import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
export default function getWindowScroll(node) {
  var win = getWindow2(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
