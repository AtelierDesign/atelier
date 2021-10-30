import getClippingRect2 from "../../../unoptimized/lib/dom-utils/getClippingRect.js";
import getDocumentElement2 from "../../../unoptimized/lib/dom-utils/getDocumentElement.js";
import getBoundingClientRect2 from "../../../unoptimized/lib/dom-utils/getBoundingClientRect.js";
import computeOffsets2 from "../../../unoptimized/lib/utils/computeOffsets.js";
import rectToClientRect2 from "../../../unoptimized/lib/utils/rectToClientRect.js";
import {clippingParents, reference, popper, bottom, top, right, basePlacements, viewport} from "../../../unoptimized/lib/enums.js";
import {isElement} from "../../../unoptimized/lib/dom-utils/instanceOf.js";
import mergePaddingObject2 from "../../../unoptimized/lib/utils/mergePaddingObject.js";
import expandToHashMap2 from "../../../unoptimized/lib/utils/expandToHashMap.js";
export default function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject2(typeof padding !== "number" ? padding : expandToHashMap2(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect2(isElement(element) ? element : element.contextElement || getDocumentElement2(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect2(state.elements.reference);
  var popperOffsets = computeOffsets2({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect2(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
