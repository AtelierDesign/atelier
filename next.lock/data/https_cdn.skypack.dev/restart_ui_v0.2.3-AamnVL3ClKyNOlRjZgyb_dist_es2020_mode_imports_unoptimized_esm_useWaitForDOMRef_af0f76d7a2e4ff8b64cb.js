import ownerDocument2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/ownerDocument.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useState} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
;
export const resolveContainerRef = (ref) => {
  var _ref;
  if (typeof document === "undefined")
    return null;
  if (ref == null)
    return ownerDocument2().body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType)
    return ref || null;
  return null;
};
export default function useWaitForDOMRef(ref, onResolved) {
  const [resolvedRef, setRef] = useState(() => resolveContainerRef(ref));
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  useEffect(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
