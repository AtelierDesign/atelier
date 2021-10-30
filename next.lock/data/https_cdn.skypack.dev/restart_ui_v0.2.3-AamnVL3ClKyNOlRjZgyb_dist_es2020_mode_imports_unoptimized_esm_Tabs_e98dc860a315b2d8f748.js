import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useMemo} = __commonjs_module0;
;
import {useUncontrolledProp} from "/-/uncontrollable@v7.2.1-EOJ2jGamcC7jjNIez5ZQ/dist=es2020,mode=imports/optimized/uncontrollable.js";
import {useSSRSafeId} from "../../unoptimized/esm/ssr.js";
import TabContext2 from "../../unoptimized/esm/TabContext.js";
import SelectableContext2 from "../../unoptimized/esm/SelectableContext.js";
import TabPanel2 from "../../unoptimized/esm/TabPanel.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
const Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = useSSRSafeId(userId);
  const generateChildId = useMemo(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = useMemo(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /* @__PURE__ */ _jsx(TabContext2.Provider, {
    value: tabContext,
    children: /* @__PURE__ */ _jsx(SelectableContext2.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel2;
export default Tabs;
