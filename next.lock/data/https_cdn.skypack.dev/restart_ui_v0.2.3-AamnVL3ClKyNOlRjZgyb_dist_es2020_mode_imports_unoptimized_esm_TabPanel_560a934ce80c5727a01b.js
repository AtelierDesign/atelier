const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit"], _excluded2 = ["activeKey", "getControlledId", "getControllerId"], _excluded3 = ["as"];
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
import TabContext2 from "../../unoptimized/esm/TabContext.js";
import SelectableContext2, {makeEventKey} from "../../unoptimized/esm/SelectableContext.js";
import NoopTransition2 from "../../unoptimized/esm/NoopTransition.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
export function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const context = useContext(TabContext2);
  if (!context)
    return [props, {
      eventKey,
      isActive: active,
      mountOnEnter,
      transition,
      unmountOnExit
    }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context, rest = _objectWithoutPropertiesLoose(context, _excluded2);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit
  }];
}
const TabPanel = /* @__PURE__ */ React.forwardRef((_ref2, ref) => {
  let {
    as: Component = "div"
  } = _ref2, props = _objectWithoutPropertiesLoose(_ref2, _excluded3);
  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition2
  }] = useTabPanel(props);
  return /* @__PURE__ */ _jsx(TabContext2.Provider, {
    value: null,
    children: /* @__PURE__ */ _jsx(SelectableContext2.Provider, {
      value: null,
      children: /* @__PURE__ */ _jsx(Transition, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: /* @__PURE__ */ _jsx(Component, Object.assign({}, tabPanelProps, {
          ref,
          role: "tabpanel",
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = "TabPanel";
export default TabPanel;
