import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
function useCommittedRef(value) {
  var ref = useRef(value);
  useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref;
}
export default useCommittedRef;
