import useEventListener2 from "../../unoptimized/esm/useEventListener.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useCallback} = __commonjs_module0;
;
export default function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }
  var documentTarget = useCallback(function() {
    return document;
  }, []);
  return useEventListener2(documentTarget, event, handler, capture);
}
