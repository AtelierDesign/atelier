import ownerDocument2 from "../../unoptimized/esm/ownerDocument.js";
export default function ownerWindow(node) {
  var doc = ownerDocument2(node);
  return doc && doc.defaultView || window;
}
