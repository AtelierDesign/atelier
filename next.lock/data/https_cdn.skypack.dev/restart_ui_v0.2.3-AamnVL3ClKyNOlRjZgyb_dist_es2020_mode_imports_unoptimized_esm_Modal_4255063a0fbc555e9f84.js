const _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
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
import activeElement2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/activeElement.js";
import contains2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/contains.js";
import canUseDOM2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/canUseDOM.js";
import listen2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/listen.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useState} = __commonjs_module0;
const {useRef} = __commonjs_module0;
const {useCallback} = __commonjs_module0;
const {useImperativeHandle} = __commonjs_module0;
const {forwardRef} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
;
import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import ReactDOM from "/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2020,mode=imports/optimized/react-dom.js";
import useMounted2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useMounted.js";
import useWillUnmount2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useWillUnmount.js";
import usePrevious2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/usePrevious.js";
import useEventCallback2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useEventCallback.js";
import ModalManager2 from "../../unoptimized/esm/ModalManager.js";
import useWaitForDOMRef2 from "../../unoptimized/esm/useWaitForDOMRef.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
import {Fragment as _Fragment} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
import {jsxs as _jsxs} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
let manager;
function getManager() {
  if (!manager)
    manager = new ModalManager2();
  return manager;
}
function useModalManager(provided) {
  const modalManager = provided || getManager();
  const modal = useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: useCallback((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: useCallback((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
const Modal = /* @__PURE__ */ forwardRef((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => /* @__PURE__ */ _jsx("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const container = useWaitForDOMRef2(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted2();
  const prevShow = usePrevious2(show);
  const [exited, setExited] = useState(!show);
  const lastFocusRef = useRef(null);
  useImperativeHandle(ref, () => modal, [modal]);
  if (canUseDOM2 && !prevShow && show) {
    lastFocusRef.current = activeElement2();
  }
  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback2(() => {
    modal.add();
    removeKeydownListenerRef.current = listen2(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen2(document, "focus", () => setTimeout(handleEnforceFocus), true);
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      const currentActiveElement = activeElement2(document);
      if (modal.dialog && currentActiveElement && !contains2(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback2(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  useEffect(() => {
    if (!show || !container)
      return;
    handleShow();
  }, [
    show,
    container,
    handleShow
  ]);
  useEffect(() => {
    if (!exited)
      return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount2(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback2(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement2();
    if (modal.dialog && currentActiveElement && !contains2(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback2((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback2((e) => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = useRef();
  const removeKeydownListenerRef = useRef();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  const Transition = transition;
  if (!container || !(show || Transition && !exited)) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /* @__PURE__ */ _jsx("div", Object.assign({}, dialogProps, {
    children: /* @__PURE__ */ React.cloneElement(children, {
      role: "document"
    })
  }));
  if (Transition) {
    dialog = /* @__PURE__ */ _jsx(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
      children: dialog
    });
  }
  let backdropElement = null;
  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    if (BackdropTransition) {
      backdropElement = /* @__PURE__ */ _jsx(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }
  return /* @__PURE__ */ _jsx(_Fragment, {
    children: /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ _jsxs(_Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
export default Object.assign(Modal, {
  Manager: ModalManager2
});
