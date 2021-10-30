import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
;
import useEventCallback2 from "../../unoptimized/esm/useEventCallback.js";
export default function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }
  var handler = useEventCallback2(listener);
  useEffect(function() {
    var target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function() {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
