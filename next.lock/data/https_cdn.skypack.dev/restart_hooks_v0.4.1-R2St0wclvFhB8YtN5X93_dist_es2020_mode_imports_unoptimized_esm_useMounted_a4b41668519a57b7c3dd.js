import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useRef} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
;
export default function useMounted() {
  var mounted = useRef(true);
  var isMounted = useRef(function() {
    return mounted.current;
  });
  useEffect(function() {
    return function() {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
