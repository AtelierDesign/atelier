import getBoundingClientRect2 from "../../../unoptimized/lib/dom-utils/getBoundingClientRect.js";
export default function getLayoutRect(element) {
  var clientRect = getBoundingClientRect2(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
