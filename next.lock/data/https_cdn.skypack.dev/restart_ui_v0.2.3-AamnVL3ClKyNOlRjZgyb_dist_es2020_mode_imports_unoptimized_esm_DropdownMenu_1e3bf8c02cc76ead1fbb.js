const _excluded = ["children"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useContext} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import useCallbackRef2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useCallbackRef.js";
import DropdownContext2 from "../../unoptimized/esm/DropdownContext.js";
import usePopper2 from "../../unoptimized/esm/usePopper.js";
import useRootClose2 from "../../unoptimized/esm/useRootClose.js";
import mergeOptionsWithPopperConfig2 from "../../unoptimized/esm/mergeOptionsWithPopperConfig.js";
import {Fragment as _Fragment} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
const noop = () => {
};
export function useDropdownMenu(options = {}) {
  const context = useContext(DropdownContext2);
  const [arrowElement, attachArrowRef] = useCallbackRef2();
  const hasShownRef = useRef(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  const handleClose = (e) => {
    context == null ? void 0 : context.toggle(false, e);
  };
  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = usePopper2(toggleElement, menuElement, mergeOptionsWithPopperConfig2({
    placement: placementOverride || placement || "bottom-start",
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useRootClose2(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const defaultProps = {
  usePopper: true
};
function DropdownMenu(_ref) {
  let {
    children
  } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [props, meta] = useDropdownMenu(options);
  return /* @__PURE__ */ _jsx(_Fragment, {
    children: children(props, meta)
  });
}
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.defaultProps = defaultProps;
export default DropdownMenu;
