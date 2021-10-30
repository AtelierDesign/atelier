import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useCallback} = __commonjs_module0;
;
import useMounted2 from "../../unoptimized/esm/useMounted.js";
function useSafeState(state) {
  var isMounted = useMounted2();
  return [state[0], useCallback(function(nextState) {
    if (!isMounted())
      return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
export default useSafeState;
