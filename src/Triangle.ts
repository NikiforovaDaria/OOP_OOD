import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    pointOne: Point;
    pointTwo: Point;
    pointThree: Point;

    constructor();
    constructor(pointOne?: Point, pointTwo?: Point, pointThree?: Point) {
        super([pointOne, pointTwo, pointThree]);
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.pointThree = pointThree;
    }

    toString = (): string => {
        return `Triangle[v1=(${this.pointOne.x}, ${this.pointOne.y}),v2=(${this.pointTwo.x}, ${this.pointTwo.y}),v3=(${this.pointThree.x}, ${this.pointThree.y})]`;
    };

    getType = (): string => {
        const typesArr = ["equilateral triangle", "isosceles triangle", "scalene triangle"];
        const distanceArr = new Set(this.getDistanceArr());
        return typesArr[distanceArr.size - 1];
    }

}
