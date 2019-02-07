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
    /**
     * @param {Point} center
     */
    constructor(center) {
        this._center = center;
    }
}

class Polygon {
    constructor(center, points) {
        this._center = center;
        this._points = points;
    }

    // get PolygonPerimeter() {
    // 	return ();
    // }
}

class Rectangle {
    /**
     * @param {Point} center
     * @param {number} width
     * @param {number} height
     */
    constructor(center, width, height) {
        this._center = center;
        this._width = width;
        this._height = height;
    }

    /**
     * @returns {number}
     */
    get area() {
        return (this._width * this._height);
    }

    /**
     * @returns {number}
     */
    get perimeter() {
        return ((this._width + this._height) * 2);
    }
}

class Square extends Rectangle {
    /**
     * @param {Point} center
     * @param {number} width
     */
    constructor(center, width) {
        super(center, width, width);
        this._center = center;
        this._width = width;
    }
}

class Circle {
    /**
     * @param {Point} center
     * @param {number} radius
     */
    constructor(center, radius) {
        this._center = center;
        this._radius = radius;
    }

    /**
     * @returns {number}
     */
    get area() {
        return (Math.PI * (radius * 2));
    }

    /**
     * @returns {number}
     */
    get perimeter() {
        return (2 * Math.PI * radius);
    }
}

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }


    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
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

let rectangle = new Rectangle(shape, 30, 20);
console.log(rectangle);

let square = new Square(shape, 30);
console.log(rectangle);

let circle = new Circle(shape, radius);
console.log(circle);

Shapes = {
    Shape,
    Polygon,
    Rectangle,
    Square,
    Circle,
    Point
};
