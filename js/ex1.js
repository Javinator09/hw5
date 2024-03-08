// Square Class
function Square(side) {
  this.side = side;

  // Method to calculate perimeter
  this.perimeter = function () {
    return this.side * 4;
  };

  // Method to calculate area
  this.area = function () {
    return this.side * this.side;
  };
  
  // Method to calculate diagonal
  this.diagonal = function () {
    return Math.sqrt(2 * this.side * this.side);
  };

  // Method to describe the square
  this.describe = function () {
    console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal().toFixed(3)}`);
  };
}

// Create 3 squares
const square1 = new Square(4);
const square2 = new Square(7);
const square3 = new Square(20);

// Describe the squares
square1.describe();
square2.describe();
square3.describe();