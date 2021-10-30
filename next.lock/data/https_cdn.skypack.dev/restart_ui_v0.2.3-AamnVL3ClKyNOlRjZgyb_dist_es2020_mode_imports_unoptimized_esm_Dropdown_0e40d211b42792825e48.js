import qsa from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/querySelectorAll.js";
import addEventListener2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/addEventListener.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useCallback} = __commonjs_module0;
const {useRef} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
const {useMemo} = __commonjs_module0;
const {useContext} = __commonjs_module0;
;
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import {useUncontrolledProp} from "/-/uncontrollable@v7.2.1-EOJ2jGamcC7jjNIez5ZQ/dist=es2020,mode=imports/optimized/uncontrollable.js";
import usePrevious2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/usePrevious.js";
import useForceUpdate2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useForceUpdate.js";
import useGlobalListener2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useGlobalListener.js";
import useEventCallback2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useEventCallback.js";
import DropdownContext2 from "../../unoptimized/esm/DropdownContext.js";
import DropdownMenu2 from "../../unoptimized/esm/DropdownMenu.js";
import DropdownToggle2, {isRoleMenu} from "../../unoptimized/esm/DropdownToggle.js";
import DropdownItem2 from "../../unoptimized/esm/DropdownItem.js";
import SelectableContext2 from "../../unoptimized/esm/SelectableContext.js";
import {dataAttr} from "../../unoptimized/esm/DataKey.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
function useRefWithUpdate() {
  const forceUpdate = useForceUpdate2();
  const ref = useRef(null);
  const attachRef = useCallback((element) => {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr("dropdown-item")}]`,
  focusFirstItemOnShow,
  placement = "bottom-start",
  children
}) {
  const [show, onToggle] = useUncontrolledProp(rawShow, defaultShow, rawOnToggle);
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious2(show);
  const lastSourceEvent = useRef(null);
  const focusInDropdown = useRef(false);
  const onSelectCtx = useContext(SelectableContext2);
  const toggle = useCallback((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback2((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, "select");
    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = useMemo(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }
  const focusToggle = useEventCallback2(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback2(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus)
      first.focus();
  });
  useEffect(() => {
    if (show)
      maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  useEffect(() => {
    lastSourceEvent.current = null;
  });
  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current)
      return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useGlobalListener2("keydown", (event) => {
    var _menuRef$current, _toggleRef$current;
    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    const isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu)) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (key === "Tab" && (!menuRef.current || !show)) {
      return;
    }
    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus)
          next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus)
            next.focus();
        }
        return;
      case "Tab":
        addEventListener2(document, "keyup", (e) => {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }
        onToggle(false, meta);
        break;
      default:
    }
  });
  return /* @__PURE__ */ _jsx(SelectableContext2.Provider, {
    value: handleSelect,
    children: /* @__PURE__ */ _jsx(DropdownContext2.Provider, {
      value: context,
      children
    })
  });
}
Dropdown.displayName = "Dropdown";
Dropdown.Menu = DropdownMenu2;
Dropdown.Toggle = DropdownToggle2;
Dropdown.Item = DropdownItem2;
export default Dropdown;
