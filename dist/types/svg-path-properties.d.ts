import { PointArray, Properties, PartProperties, Point, MatrixArray } from "./types";
export default class svgPathProperties implements Properties {
    private length;
    private partial_lengths;
    private functions;
    private string;
    private rotation;
    constructor(string: string);
    load: (string: string) => void;
    private getPartAtLength;
    getTotalLength: () => number;
    getPointAtLength: (fractionLength: number) => Point;
    getTangentAtLength: (fractionLength: number) => Point;
    getPropertiesAtLength: (fractionLength: number) => import("./types").PointProperties;
    isClosed: () => boolean;
    closestPoint: (point: Point, binaryPrecision?: number, coarsePrecision?: number) => {
        x: number;
        y: number;
        length: number;
        distance: number;
        slope: Point;
        within: any;
        closed: boolean;
    };
    center: () => {
        x: number;
        y: number;
    };
    bound: () => any;
    points: () => Point[];
    path: () => string;
    shiftPathBy: (dx?: number, dy?: number) => string;
    translate: (dx: number, dy: number) => string;
    rotateBy: (angle: number) => string;
    withoutRotation: () => string;
    rotate: (origin: Point, angle: number) => string;
    rotatedPath: (origin: Point, angle: number) => string;
    scale: (origin: Point, scales: PointArray) => string;
    transform: (origin: Point, transformers: MatrixArray) => string;
    getParts: () => PartProperties[];
}
export declare function transformPoint(point: Point, origin: Point, transformers: MatrixArray): {
    x: number;
    y: number;
};
