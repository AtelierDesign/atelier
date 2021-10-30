import addEventListener2 from "../../unoptimized/esm/addEventListener.js";
import removeEventListener2 from "../../unoptimized/esm/removeEventListener.js";
function listen(node, eventName, handler, options) {
  addEventListener2(node, eventName, handler, options);
  return function() {
    removeEventListener2(node, eventName, handler, options);
  };
}
export default listen;
