import * as test from "tape";
import SVGPathProperties from "../src/svg-path-properties";

test("Testing the lineTo", function (test) {
  let properties = new SVGPathProperties("M2,2L2,8L8,8L8,2");
  let path = properties.path();
  console.log(path)
  // test.equal(best.x, 2, "X should be 2");
  // test.equal(best.y, 3, "Y should be 3");

  properties = new SVGPathProperties("M2,2 L80,2 L80,80 L2,80z");
  console.log(properties.path());

  properties = new SVGPathProperties(`
    M 10 80 Q 52.5 10, 95 80 T 180 80
  `);
  console.log(properties.path());

  properties = new SVGPathProperties(`
    M 80 80
    A 45 45, 0, 0, 0, 125 125
    L 125 80 Z
  `);
  console.log(properties.path());
  console.log(properties.shiftPathBy(100, 100));
  // best = properties.closestPoint({ x: 4, y: 4 });
  // test.equal(best.within, true, "in/out");

  test.end();
});