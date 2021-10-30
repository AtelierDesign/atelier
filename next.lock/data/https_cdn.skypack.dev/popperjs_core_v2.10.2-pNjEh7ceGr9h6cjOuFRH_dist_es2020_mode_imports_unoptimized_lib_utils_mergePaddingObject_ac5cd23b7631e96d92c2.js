import getFreshSideObject2 from "../../../unoptimized/lib/utils/getFreshSideObject.js";
export default function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject2(), paddingObject);
}
