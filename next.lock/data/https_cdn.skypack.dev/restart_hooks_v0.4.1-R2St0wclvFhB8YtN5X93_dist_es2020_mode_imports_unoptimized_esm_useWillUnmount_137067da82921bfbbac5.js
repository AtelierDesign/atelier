import useUpdatedRef2 from "../../unoptimized/esm/useUpdatedRef.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
;
export default function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef2(fn);
  useEffect(function() {
    return function() {
      return onUnmount.current();
    };
  }, []);
}
