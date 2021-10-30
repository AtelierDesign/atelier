import ownerDocument2 from "../../unoptimized/esm/ownerDocument.js";
export default function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument2();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName)
      return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}
