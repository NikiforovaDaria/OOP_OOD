export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(externalX?: number, externalY?: number) {
        this.x = externalX || 0
        this.y = externalY || 0
    };

    public toString = (): string => {
        return `(${this.x}, ${this.y})`;
    };

    public distance(): number;
    public distance(pointX?: number | Point, pointY?: number): number {

        if (!pointX && !pointY) {
            return Math.hypot(0 - this.x, 0 - this.y)
        };

        if (pointX instanceof Point) {
            const x1: number = pointX.x;
            const y1: number = pointX.y;
            return Math.hypot(x1 - this.x, y1 - this.y);
        }

        return Math.hypot(pointX - this.x, pointY - this.y);
    }
};
