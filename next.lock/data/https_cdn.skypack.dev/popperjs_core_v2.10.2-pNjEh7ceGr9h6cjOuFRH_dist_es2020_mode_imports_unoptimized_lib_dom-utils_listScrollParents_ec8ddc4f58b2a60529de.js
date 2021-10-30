import getScrollParent2 from "../../../unoptimized/lib/dom-utils/getScrollParent.js";
import getParentNode2 from "../../../unoptimized/lib/dom-utils/getParentNode.js";
import getWindow2 from "../../../unoptimized/lib/dom-utils/getWindow.js";
import isScrollParent2 from "../../../unoptimized/lib/dom-utils/isScrollParent.js";
export default function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow2(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent2(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode2(target)));
}
