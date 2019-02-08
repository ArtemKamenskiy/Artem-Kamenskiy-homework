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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(center) {
        this.center = center;
    }
    return Shape;
}());
var Polygon = /** @class */ (function () {
    function Polygon(center, points) {
        this.center = center;
        this.points = points;
    }
    return Polygon;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(center, width, height) {
        this.center = center;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return (this.width * this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        get: function () {
            return ((this.width + this.height) * 2);
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    /**
     * @param {Point} center
     * @param {number} width
     */
    function Square(center, width) {
        var _this = _super.call(this, center, width, width) || this;
        _this.center = center;
        _this.width = width;
        return _this;
    }
    return Square;
}(Rectangle));
var Circle = /** @class */ (function () {
    function Circle(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return (Math.PI * (this.radius * 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return (2 * Math.PI * this.radius);
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.xNumber = x;
        this.yNumber = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.xNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.yNumber;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getPointAtOffset = function (x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    };
    Point.prototype.getDistance = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    };
    return Point;
}());
var point = new Point(50, 100);
console.log(point);
var shape = new Shape(point);
console.log(shape);
var radius = 30;
// let polygon = new Polygon(shape, points);
// console.log(polygon);
var rectangle = new Rectangle(shape, 30, 20);
console.log(rectangle);
var square = new Square(shape, 30);
console.log(rectangle);
var circle = new Circle(shape, radius);
console.log(circle);
Shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
