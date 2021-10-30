const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
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
import qsa from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/querySelectorAll.js";
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useContext} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
import useForceUpdate2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useForceUpdate.js";
import useMergedRefs2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useMergedRefs.js";
import NavContext2 from "../../unoptimized/esm/NavContext.js";
import SelectableContext2, {makeEventKey} from "../../unoptimized/esm/SelectableContext.js";
import TabContext2 from "../../unoptimized/esm/TabContext.js";
import {dataAttr, dataProp} from "../../unoptimized/esm/DataKey.js";
import NavItem2 from "../../unoptimized/esm/NavItem.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
const noop = () => {
};
const EVENT_KEY_ATTR = dataAttr("event-key");
const Nav = /* @__PURE__ */ React.forwardRef((_ref, ref) => {
  let {
    as: Component = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const forceUpdate = useForceUpdate2();
  const needsRefocusRef = useRef(false);
  const parentOnSelect = useContext(SelectableContext2);
  const tabContext = useContext(TabContext2);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = useRef(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode)
      return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild)
      return null;
    const index = items.indexOf(activeChild);
    if (index === -1)
      return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length)
      nextIndex = 0;
    if (nextIndex < 0)
      nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null)
      return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild)
      return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs2(ref, listNode);
  return /* @__PURE__ */ _jsx(SelectableContext2.Provider, {
    value: handleSelect,
    children: /* @__PURE__ */ _jsx(NavContext2.Provider, {
      value: {
        role,
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /* @__PURE__ */ _jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav.displayName = "Nav";
export default Object.assign(Nav, {
  Item: NavItem2
});
