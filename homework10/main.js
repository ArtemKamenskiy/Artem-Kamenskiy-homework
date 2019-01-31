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
	constructor(center) { 
		this._x = center.x;
		this._y = center.y;
	}
}

class Polygon {
	constructor(center, points) { 
		this._center = center;
	}
	get PolygonPerimeter() {
		return (Point1 + Point2 + Point3 + Point4 + Point5 + Point6);
	}
}

class Rectangle {
	constructor(center, width, height) {
		this._center = center;
		this._width = width;
		this._height = height;
	}
	get RectangleArea() {
		return (this._width * this._height);
	}
	get RectanglePerimeter() {
		return (this._width + this._height);
	}
}

class Square extends Rectangle {
	constructor(center, width) {
		super(center, width, width);
		this._center = center;
		this._width = width;
	}
}

class Circle {
	constructor(center, radius) { 
		this._center = center;
		this._radius = radius;
	}
	get CircleArea() {
		return (3.14 * (radius * 2));
	}
	get CirclePerimeter() {
		return (2 * 3.14 * radius);
	}
}

class Point {
	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

	constructor(x, y) {
		this._x = x;
		this._y = y;
	}

	getPointAtOffset(x1, y1) {
		return new Point(this.x + x1, this.y + y1);
	}

	getDistance(point) {
		return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
	}
}
	// points for polygon
	let Point1 = 20;
	let Point2 = 30;
	let Point3 = 40;
	let Point4 = 50;
	let Point5 = 10;
	let Point6 = 20;
	let points = [Point1, Point2, Point3, Point4, Point5, Point6];


	let point = new Point (50, 100);
	console.log(point);

	let shape = new Shape (point);
	console.log(shape);

	let radius = 30;

	let polygon = new Polygon(shape, points);
	console.log(polygon);

	let rectangle = new Rectangle (shape, 30, 20);
	console.log(rectangle);

	let square = new Square (shape, 30);
	console.log(rectangle);

	let circle = new Circle (shape, radius);
	console.log(circle);


Shapes = {
	Shape: Shape,
	Polygon: Polygon,
	Rectangle: Rectangle,
	Square: Square,
	Circle: Circle,
	Point: Point
};
