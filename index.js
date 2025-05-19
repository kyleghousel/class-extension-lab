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
    if (this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {

  get isValid() {
    return this.validityCheck()
  }

  validityCheck() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    if (this.isValid) { return this.sides[0]**2 }
  }

}
