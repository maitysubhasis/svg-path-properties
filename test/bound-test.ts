import * as test from "tape";
import SVGPathProperties from "../src/svg-path-properties";

test("Bound test", function (test) {
  let properties = new SVGPathProperties("M2,2L2,8L8,8L8,2");
  console.log(properties.bound())
  // test.equal(best.x, 2, "X should be 2");
  // test.equal(best.y, 3, "Y should be 3");

  // properties = new SVGPathProperties("M2,2 L80,2 L80,80 L2,80z");
  // const best = properties.closestPoint({ x: 4, y: 4 });
  // test.equal(best.within, true, "in/out");

  test.end();
});