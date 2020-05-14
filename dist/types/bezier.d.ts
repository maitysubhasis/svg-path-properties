import { Properties, Point, MatrixArray } from "./types";
export declare class Bezier implements Properties {
    private a;
    private b;
    private c;
    private d;
    private length;
    private getArcLength;
    private getPoint;
    private getDerivative;
    constructor(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number | undefined, dy: number | undefined);
    getTotalLength: () => number;
    getPointAtLength: (length: number) => Point;
    getTangentAtLength: (length: number) => Point;
    getPropertiesAtLength: (length: number) => {
        x: number;
        y: number;
        tangentX: number;
        tangentY: number;
    };
    points: () => Point[];
    path: () => string;
    shiftPathBy: (dx?: number, dy?: number) => string;
    transform: (origin: Point, transformers: MatrixArray) => string;
    getC: () => Point;
    getD: () => Point;
}
