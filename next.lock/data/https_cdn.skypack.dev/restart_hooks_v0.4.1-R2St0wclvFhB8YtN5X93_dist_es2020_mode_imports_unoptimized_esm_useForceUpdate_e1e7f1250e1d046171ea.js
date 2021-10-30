import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useReducer} = __commonjs_module0;
;
export default function useForceUpdate() {
  var _useReducer = useReducer(function(state) {
    return !state;
  }, false), dispatch = _useReducer[1];
  return dispatch;
}
