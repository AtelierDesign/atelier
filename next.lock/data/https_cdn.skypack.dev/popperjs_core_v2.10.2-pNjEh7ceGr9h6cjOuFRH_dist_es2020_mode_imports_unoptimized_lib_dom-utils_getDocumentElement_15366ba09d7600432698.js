import {isElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
export default function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
