class Polygon {

  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.calcSides()
  }

  calcSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.calcPerimeter()
  }

  calcPerimeter() {
    return this.sides.reduce((acc, side) => acc + side)
  }

}

class Triangle extends Polygon {

  get isValid() {
    return this.validityCheck()
  }

  validityCheck() {
    return this.countSides === 3 &&
           this.sides[0] + this.sides[1] > this.sides[2] &&
           this.sides[0] + this.sides[2] > this.sides[1] &&
           this.sides[1] + this.sides[2] > this.sides[0]
  }
}

class Square extends Polygon {

  get isValid() {
    return this.validityCheck()
  }

  validityCheck() {
    return this.sides[0] === this.sides[1] &&
           this.sides[0] === this.sides[2] &&
           this.sides[0] === this.sides[3]
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.isValid ? this.sides[0]**2 : 'Not a square. Go back to class, kid.'
  }

}
