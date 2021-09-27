import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(externalPointsList: Point[], externalColor?: string, externalFilled?: boolean);
    constructor(externalPointsList: Point[], externalColor: string = "green", externalFilled: boolean = true) {

        if(externalPointsList.length === 2) {
            throw new Error("needs three points")
        }

        this.color = externalColor;
        this.filled = externalFilled;
        this.points = externalPointsList;
    };


    abstract getType(): string;

    toString = (): string => {
        const filledStr = this.filled ? "filled" : "not filled"
        const pointsStr = this.points.map((point, idx) => {
            if(idx === 1 || idx === this.points.length - 1) {
                return ` ${point}`
            }
            return `${point}`
        })
        return `A Shape with color of ${this.color} and ${filledStr}. Points: ${pointsStr}.`;
    };

    getDistanceArr = () => {
        return this.points.map((point, idx) => {
            const firstPoint = this.points[0]; 
            const nexPoint = this.points[idx+1];
            if(idx === this.points.length - 1) {
                // @ts-ignore
                return new Point(point.x, point.y).distance(firstPoint.x, firstPoint.y)
            };
            // @ts-ignore
            return new Point(point.x, point.y).distance(nexPoint.x, nexPoint.y)

        });
    };

    getPerimeter = (): number => {
        const distanceArr = this.getDistanceArr();

        return distanceArr.reduce((prevVal, currVal) => prevVal + currVal)
    }
}
