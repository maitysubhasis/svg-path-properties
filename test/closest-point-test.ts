import * as test from "tape";
import { LinearPosition } from "../src/linear";
import SVGPathProperties from "../src/svg-path-properties";
import { inDelta } from "./inDelta";

test("Testing the lineTo", function (test) {
  let properties = new SVGPathProperties("M2,2L2,8L8,8L8,2");
  let best = properties.closestPoint({ x: 3, y: 3 });
  test.equal(best.x, 2, "X should be 2");
  test.equal(best.y, 3, "Y should be 3");

  properties = new SVGPathProperties("M2,2 L80,2 L80,80 L2,80z");
  best = properties.closestPoint({ x: 4, y: 4 });
  test.equal(best.within, true, "in/out");

  test.end();
});