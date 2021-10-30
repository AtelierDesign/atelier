import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useMemo} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
import useMounted2 from "../../unoptimized/esm/useMounted.js";
import useWillUnmount2 from "../../unoptimized/esm/useWillUnmount.js";
var MAX_DELAY_MS = Math.pow(2, 31) - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function() {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
export default function useTimeout() {
  var isMounted = useMounted2();
  var handleRef = useRef();
  useWillUnmount2(function() {
    return clearTimeout(handleRef.current);
  });
  return useMemo(function() {
    var clear = function clear2() {
      return clearTimeout(handleRef.current);
    };
    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }
      if (!isMounted())
        return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}
