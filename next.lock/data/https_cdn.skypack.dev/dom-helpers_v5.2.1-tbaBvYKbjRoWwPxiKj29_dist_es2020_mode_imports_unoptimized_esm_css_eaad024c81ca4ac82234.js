import getComputedStyle2 from "../../unoptimized/esm/getComputedStyle.js";
import hyphenate from "../../unoptimized/esm/hyphenateStyle.js";
import isTransform2 from "../../unoptimized/esm/isTransform.js";
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenate(property)) || getComputedStyle2(node).getPropertyValue(hyphenate(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenate(key));
    } else if (isTransform2(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenate(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
export default style;
