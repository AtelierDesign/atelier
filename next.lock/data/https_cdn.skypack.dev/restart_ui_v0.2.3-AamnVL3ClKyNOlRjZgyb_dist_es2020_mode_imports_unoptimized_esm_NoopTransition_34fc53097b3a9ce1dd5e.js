import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = useRef(inProp);
  useEffect(() => {
    if (inProp)
      hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp)
    return children;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return children;
}
export default NoopTransition;
