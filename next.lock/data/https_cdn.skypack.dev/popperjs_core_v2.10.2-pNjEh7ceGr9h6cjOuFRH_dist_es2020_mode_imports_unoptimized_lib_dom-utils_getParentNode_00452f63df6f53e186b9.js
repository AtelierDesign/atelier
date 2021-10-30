import getNodeName2 from "../../../unoptimized/lib/dom-utils/getNodeName.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import {isShadowRoot} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
export default function getParentNode(element) {
  if (getNodeName2(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement2(element);
}
