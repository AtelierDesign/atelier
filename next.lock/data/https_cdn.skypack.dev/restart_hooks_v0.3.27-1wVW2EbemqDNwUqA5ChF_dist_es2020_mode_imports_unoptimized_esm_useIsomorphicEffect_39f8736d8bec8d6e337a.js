import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useEffect} = __commonjs_module0;
const {useLayoutEffect} = __commonjs_module0;
;
var isReactNative = typeof global !== "undefined" && global.navigator && global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
export default isDOM || isReactNative ? useLayoutEffect : useEffect;
