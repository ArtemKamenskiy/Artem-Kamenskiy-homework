/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */


class Shape {
    center: Point;

    constructor(center: Point) {
        this.center = center;
    }
}

class Polygon {
    center: Point;
    points: Array<Point>;

    constructor(center: Point, points: Array<Point>) {
        this.center = center;
        this.points = points;
    }

    // get PolygonPerimeter() {
    // 	return ();
    // }
}

class Rectangle {
    center: Point;
    width: number;
    height: number;

    constructor(center: Point, width: number, height: number) {
        this.center = center;
        this.width = width;
        this.height = height;
    }

    get area(): number {
        return (this.width * this.height);
    }

    get perimeter(): number {
        return ((this.width + this.height) * 2);
    }
}

class Square extends Rectangle {
    constructor(center: Point, width: number) {
        super(center, width, width);
        this.center = center;
        this.width = width;
    }
}

class Circle {
    center: Point;
    radius: number;

    constructor(center: Point, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    get area(): number {
        return (Math.PI * (this.radius * 2));
    }

    get perimeter(): number {
        return (2 * Math.PI * this.radius);
    }
}

class Point {
    xNumber: number;
    yNumber: number;

    constructor(x: number, y: number) {
        this.xNumber = x;
        this.yNumber = y;
    }

    get x(): number {
        return this.xNumber;
    }

    get y(): number {
        return this.yNumber;
    }


    getPointAtOffset(x1: number, y1: number): Point {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point: Point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }
}

let point = new Point(50, 100);
console.log(point);

let shape = new Shape(point);
console.log(shape);

let radius = 30;

// let polygon = new Polygon(shape, points);
// console.log(polygon);

let rectangle = new Rectangle(point, 30, 20);
console.log(rectangle);

let square = new Square(point, 30);
console.log(rectangle);

let circle = new Circle(point, radius);
console.log(circle);

let Shapes = {
    Shape,
    Polygon,
    Rectangle,
    Square,
    Circle,
    Point
};