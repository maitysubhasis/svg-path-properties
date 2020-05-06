export interface Properties {
  getTotalLength(): number;
  getPointAtLength(pos: number): Point;
  getTangentAtLength(pos: number): Point;
  getPropertiesAtLength(pos: number): PointProperties;
  shiftPathBy(dx: number, dy: number): string;
  path(): string;
  transform(origin: Point, transformers: MatrixArray): string;
  points(): PointsArray;
}

export interface PartProperties {
  start: Point;
  end: Point;
  length: number;
  getPointAtLength(pos: number): Point;
  getTangentAtLength(pos: number): Point;
  getPropertiesAtLength(pos: number): PointProperties;
  shiftPathBy(dx: number, dy: number): string;
  path(): string;
  transform(origin: Point, transformers: MatrixArray): string;
  points(): PointsArray;
}
export interface Point {
  x: number;
  y: number;
}
export type PointArray = [number, number];
export type PointsArray = any[];

export type Matrix = [number, number, number, number];
export type MatrixArray = [Matrix];

export interface PointProperties {
  x: number;
  y: number;
  tangentX: number;
  tangentY: number;
}

export type pathOrders =
  | "a"
  | "c"
  | "h"
  | "l"
  | "m"
  | "q"
  | "s"
  | "t"
  | "v"
  | "z";
