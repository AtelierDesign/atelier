import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
export default function usePrevious(value) {
  var ref = useRef(null);
  useEffect(function() {
    ref.current = value;
  });
  return ref.current;
}
