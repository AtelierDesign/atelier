const _excluded = ["eventKey", "disabled", "onClick", "active", "as"];
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
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useContext} = __commonjs_module0;
;
import useEventCallback2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useEventCallback.js";
import SelectableContext2, {makeEventKey} from "../../unoptimized/esm/SelectableContext.js";
import NavContext2 from "../../unoptimized/esm/NavContext.js";
import Button2 from "../../unoptimized/esm/Button.js";
import {dataAttr} from "../../unoptimized/esm/DataKey.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
export function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = useContext(SelectableContext2);
  const navContext = useContext(NavContext2);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback2((event) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(event);
    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    "aria-disabled": disabled || void 0,
    "aria-selected": isActive,
    [dataAttr("dropdown-item")]: ""
  }, {
    isActive
  }];
}
const DropdownItem = /* @__PURE__ */ React.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = Button2
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /* @__PURE__ */ _jsx(Component, Object.assign({}, props, {
    ref
  }, dropdownItemProps));
});
DropdownItem.displayName = "DropdownItem";
export default DropdownItem;
