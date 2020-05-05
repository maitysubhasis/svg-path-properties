import { Properties, Point } from "./types";

import {
  cubicPoint,
  getCubicArcLength,
  cubicDerivative,
  getQuadraticArcLength,
  quadraticPoint,
  quadraticDerivative,
  t2length
} from "./bezier-functions";

export class Bezier implements Properties {
  private a: Point;
  private b: Point;
  private c: Point;
  private d: Point;
  private length: number;
  private getArcLength: (xs: number[], ys: number[], t: number) => number;
  private getPoint: (xs: number[], ys: number[], t: number) => Point;
  private getDerivative: (xs: number[], ys: number[], t: number) => Point;
  constructor(
    ax: number,
    ay: number,
    bx: number,
    by: number,
    cx: number,
    cy: number,
    dx: number | undefined,
    dy: number | undefined
  ) {
    this.a = { x: ax, y: ay };
    this.b = { x: bx, y: by };
    this.c = { x: cx, y: cy };

    if (dx !== undefined && dy !== undefined) {
      this.getArcLength = getCubicArcLength;
      this.getPoint = cubicPoint;
      this.getDerivative = cubicDerivative;
      this.d = { x: dx, y: dy };
    } else {
      this.getArcLength = getQuadraticArcLength;
      this.getPoint = quadraticPoint;
      this.getDerivative = quadraticDerivative;
      this.d = { x: 0, y: 0 };
    }
    this.length = this.getArcLength(
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y],
      1
    );
  }
  public getTotalLength = () => {
    return this.length;
  };
  public getPointAtLength = (length: number) => {
    const t = t2length(
      length,
      this.length,
      this.getArcLength,
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y]
    );

    return this.getPoint(
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y],
      t
    );
  };
  public getTangentAtLength = (length: number) => {
    const t = t2length(
      length,
      this.length,
      this.getArcLength,
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y]
    );

    const derivative = this.getDerivative(
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y],
      t
    );
    const mdl = Math.sqrt(
      derivative.x * derivative.x + derivative.y * derivative.y
    );
    let tangent: Point;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    return tangent;
  };
  public getPropertiesAtLength = (length: number) => {
    const t = t2length(
      length,
      this.length,
      this.getArcLength,
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y]
    );

    const derivative = this.getDerivative(
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y],
      t
    );
    const mdl = Math.sqrt(
      derivative.x * derivative.x + derivative.y * derivative.y
    );
    let tangent: Point;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    const point = this.getPoint(
      [this.a.x, this.b.x, this.c.x, this.d.x],
      [this.a.y, this.b.y, this.c.y, this.d.y],
      t
    );
    return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
  };

  public path = () => {
    return this.shiftPathBy();
  }

  public shiftPathBy = (dx: number = 0, dy: number = 0) => {
    const { a, b, c, d } = this

    if (d.x === 0 && d.y === 0) {
      return `C${a.x + dx},${a.y + dy} ${b.x + dx},${b.y + dy} ${c.x + dx},${c.y + dy} `;
    } else {
      return `C${a.x + dx},${a.y + dy} ${b.x + dx},${b.y + dy} ${c.x + dx},${c.y + dy} ${d.x + dx},${d.y + dy} `;
    }
  }

  public getC = () => {
    return this.c;
  };
  public getD = () => {
    return this.d;
  };
}
