const _excluded = ["as", "active", "eventKey"];
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
import NavContext2 from "../../unoptimized/esm/NavContext.js";
import SelectableContext2, {makeEventKey} from "../../unoptimized/esm/SelectableContext.js";
import Button2 from "../../unoptimized/esm/Button.js";
import {dataAttr} from "../../unoptimized/esm/DataKey.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
export function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = useContext(SelectableContext2);
  const navContext = useContext(NavContext2);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist")
      props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    props["aria-controls"] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }
  if (props.role === "tab") {
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
    if (isActive) {
      props["aria-selected"] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }
  props.onClick = useEventCallback2((e) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /* @__PURE__ */ React.forwardRef((_ref, ref) => {
  let {
    as: Component = Button2,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return /* @__PURE__ */ _jsx(Component, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
export default NavItem;
