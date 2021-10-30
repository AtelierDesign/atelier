import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useCallback} = __commonjs_module0;
;
import useCommittedRef2 from "../../unoptimized/esm/useCommittedRef.js";
export default function useEventCallback(fn) {
  var ref = useCommittedRef2(fn);
  return useCallback(function() {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
