import {max as mathMax, min as mathMin} from "../../../unoptimized/lib/utils/math.js";
export default function within(min, value, max) {
  return mathMax(min, mathMin(value, max));
}
