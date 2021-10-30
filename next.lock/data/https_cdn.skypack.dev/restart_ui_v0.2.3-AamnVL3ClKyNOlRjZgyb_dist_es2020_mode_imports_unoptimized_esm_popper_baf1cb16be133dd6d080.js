import arrow2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/arrow.js";
import computeStyles2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/computeStyles.js";
import eventListeners2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/eventListeners.js";
import flip2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/flip.js";
import hide2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/hide.js";
import offset2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/offset.js";
import popperOffsets2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/popperOffsets.js";
import preventOverflow2 from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/modifiers/preventOverflow.js";
import {placements} from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/enums.js";
import {popperGenerator} from "/-/@popperjs/core@v2.10.2-pNjEh7ceGr9h6cjOuFRH/dist=es2020,mode=imports/unoptimized/lib/popper-base.js";
export const createPopper = popperGenerator({
  defaultModifiers: [hide2, popperOffsets2, computeStyles2, eventListeners2, offset2, flip2, preventOverflow2, arrow2]
});
export {placements};
export default null;
