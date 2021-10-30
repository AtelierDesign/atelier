import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useContext} = __commonjs_module0;
const {useCallback} = __commonjs_module0;
;
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import {useSSRSafeId} from "../../unoptimized/esm/ssr.js";
import DropdownContext2 from "../../unoptimized/esm/DropdownContext.js";
import {Fragment as _Fragment} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
export const isRoleMenu = (el) => {
  var _el$getAttribute;
  return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
};
const noop = () => {
};
export function useDropdownToggle() {
  const id = useSSRSafeId();
  const {
    show = false,
    toggle = noop,
    setToggle,
    menuElement
  } = useContext(DropdownContext2) || {};
  const handleClick = useCallback((e) => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop,
    onClick: handleClick,
    "aria-expanded": !!show
  };
  if (menuElement && isRoleMenu(menuElement)) {
    props["aria-haspopup"] = true;
  }
  return [props, {
    show,
    toggle
  }];
}
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /* @__PURE__ */ _jsx(_Fragment, {
    children: children(props, meta)
  });
}
DropdownToggle.displayName = "DropdownToggle";
export default DropdownToggle;
