import * as test from "tape";
import SVGPathProperties from "../src/svg-path-properties";

test("Bound test", function (test) {
  let props = new SVGPathProperties("M200,200 L200,500 L600,500 L600,200");
  const center = {
    x: 400,
    y: 350,
  };
  const lt = {
    x: 200,
    y: 200,
  };
  let points = props.points();
  let path = props.scale(points[0], [1.5, 1]);
  points = props.points();
  console.log(points)
  path = props.scale(points[0], [0.5, 1.5]);

  // path = props.rotateBy(4);

  // const points = props.points();

  // console.log(points)

  // path = props.scale(points[0], 45, [1.5, 1]);
  // props = new SVGPathProperties(path);
  // path = props.rotate(points[0], -45);
  console.log(path)

  // test.equal(best.x, 2, "X should be 2");
  // test.equal(best.y, 3, "Y should be 3");

  // properties = new SVGPathProperties("M2,2 L80,2 L80,80 L2,80z");
  // const best = properties.closestPoint({ x: 4, y: 4 });
  // test.equal(best.within, true, "in/out");

  test.end();
});