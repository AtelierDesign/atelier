import getVariation2 from "../../../unoptimized/lib/utils/getVariation.js";
import {variationPlacements, basePlacements, placements as allPlacements} from "../../../unoptimized/lib/enums.js";
import detectOverflow2 from "../../../unoptimized/lib/utils/detectOverflow.js";
import getBasePlacement2 from "../../../unoptimized/lib/utils/getBasePlacement.js";
export default function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? allPlacements : _options$allowedAutoP;
  var variation = getVariation2(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation2(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
    if (process.env.NODE_ENV !== "production") {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow2(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement2(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
