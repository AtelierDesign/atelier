import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import getWindowScrollBarX2 from "../../../unoptimized/lib/dom-utils/getWindowScrollBarX.js";
export default function getViewportRect(element) {
  var win = getWindow2(element);
  var html = getDocumentElement2(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX2(element),
    y
  };
}
