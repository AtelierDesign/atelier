import _react from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useContext} = _react;
const {useMemo} = _react;
const {useState} = _react;
const {useLayoutEffect} = _react;
;
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /* @__PURE__ */ _react.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
function SSRProvider(props) {
  let cur = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = useMemo(() => ({
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? "" : cur.prefix + "-" + ++cur.current,
    current: 0
  }), [cur]);
  return /* @__PURE__ */ _react.createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function useSSRSafeId(defaultId) {
  let ctx = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  }
  return useMemo(() => defaultId || "react-aria" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
function useIsSSR() {
  let cur = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = useState(isInSSRContext);
  if (typeof window !== "undefined" && isInSSRContext) {
    useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  }
  return isSSR;
}
export {SSRProvider, useIsSSR, useSSRSafeId};
export default null;
