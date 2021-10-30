import getParentNode2 from "../../../unoptimized/lib/dom-utils/getParentNode.js";
import isScrollParent2 from "../../../unoptimized/lib/dom-utils/isScrollParent.js";
import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
import {isHTMLElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
export default function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName2(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent2(node)) {
    return node;
  }
  return getScrollParent(getParentNode2(node));
}
