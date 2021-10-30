import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
function useUpdateEffect(fn, deps) {
  var isFirst = useRef(true);
  useEffect(function() {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
export default useUpdateEffect;
