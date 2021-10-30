import ownerWindow2 from "../../unoptimized/esm/ownerWindow.js";
export default function getComputedStyle(node, psuedoElement) {
  return ownerWindow2(node).getComputedStyle(node, psuedoElement);
}
