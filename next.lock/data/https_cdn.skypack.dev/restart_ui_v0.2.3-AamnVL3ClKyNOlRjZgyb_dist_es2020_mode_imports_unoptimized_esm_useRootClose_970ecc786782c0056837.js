import contains2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/contains.js";
import listen2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/listen.js";
import ownerDocument2 from "/-/dom-helpers@v5.2.1-tbaBvYKbjRoWwPxiKj29/dist=es2020,mode=imports/unoptimized/esm/ownerDocument.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useCallback} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
;
import useEventCallback2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useEventCallback.js";
import warning2 from "/-/warning@v4.0.3-vDUGnqfft5oykRgkN4XT/dist=es2020,mode=imports/optimized/warning.js";
const escapeKeyCode = 27;
const noop = () => {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const getRefTarget = (ref) => ref && ("current" in ref ? ref.current : ref);
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = "click"
} = {}) {
  const preventMouseRootCloseRef = useRef(false);
  const onClose = onRootClose || noop;
  const handleMouseCapture = useCallback((e) => {
    const currentTarget = getRefTarget(ref);
    warning2(!!currentTarget, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node");
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains2(currentTarget, e.target);
  }, [ref]);
  const handleMouse = useEventCallback2((e) => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = useEventCallback2((e) => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  useEffect(() => {
    if (disabled || ref == null)
      return void 0;
    let currentEvent = window.event;
    const doc = ownerDocument2(getRefTarget(ref));
    const removeMouseCaptureListener = listen2(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = listen2(doc, clickTrigger, (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    const removeKeyupListener = listen2(doc, "keyup", (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map((el) => listen2(el, "mousemove", noop));
    }
    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach((remove) => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
export default useRootClose;
