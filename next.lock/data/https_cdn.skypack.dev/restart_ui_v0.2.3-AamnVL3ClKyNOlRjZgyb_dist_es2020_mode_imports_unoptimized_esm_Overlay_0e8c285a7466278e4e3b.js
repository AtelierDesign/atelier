import * as React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
import ReactDOM from "/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2020,mode=imports/optimized/react-dom.js";
import useCallbackRef2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useCallbackRef.js";
import useMergedRefs2 from "/-/@restart/hooks@v0.4.1-R2St0wclvFhB8YtN5X93/dist=es2020,mode=imports/unoptimized/esm/useMergedRefs.js";
import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useState} = __commonjs_module0;
;
import usePopper2 from "../../unoptimized/esm/usePopper.js";
import useRootClose2 from "../../unoptimized/esm/useRootClose.js";
import useWaitForDOMRef2 from "../../unoptimized/esm/useWaitForDOMRef.js";
import mergeOptionsWithPopperConfig2 from "../../unoptimized/esm/mergeOptionsWithPopperConfig.js";
import {jsx as _jsx} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
const Overlay = /* @__PURE__ */ React.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = useCallbackRef2();
  const [arrowElement, attachArrowRef] = useCallbackRef2();
  const mergedRef = useMergedRefs2(attachRef, outerRef);
  const container = useWaitForDOMRef2(props.container);
  const target = useWaitForDOMRef2(props.target);
  const [exited, setExited] = useState(!props.show);
  const popper = usePopper2(target, rootElement, mergeOptionsWithPopperConfig2({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));
  if (props.show) {
    if (exited)
      setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };
  const mountOverlay = props.show || Transition && !exited;
  useRootClose2(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /* @__PURE__ */ _jsx(Transition, {
      in: props.show,
      appear: true,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
      children: child
    });
  }
  return container ? /* @__PURE__ */ ReactDOM.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
export default Overlay;
