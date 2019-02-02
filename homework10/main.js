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
            this._center = center;
        }
    }

    class Polygon {
        constructor(center, points) {
                this._center = center;
            }
            // get PolygonPerimeter() {
            // 	return ();
            // }
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
            return ((this._width + this._height) * 2);
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
            return (Math.PI * (radius * 2));
        }
        get CirclePerimeter() {
            return (2 * Math.PI * radius);
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
        Shape: Shape,
        Polygon: Polygon,
        Rectangle: Rectangle,
        Square: Square,
        Circle: Circle,
        Point: Point
    };
