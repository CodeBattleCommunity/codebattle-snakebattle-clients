class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isOutOfBoard(boardSize) {
    return (
      this.x >= boardSize || this.y >= boardSize || this.x < 0 || this.y < 0
    );
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  notEquals() {
    return !this.equals(point);
  }

  shiftTop(delta = 1) {
    return new Point(this.x, this.y - delta);
  }

  shiftLeft(delta = 1) {
    return new Point(this.x - delta, this.y);
  }

  shiftRight(delta = 1) {
    return new Point(this.x + delta, this.y);
  }

  shiftBottom(delta = 1) {
    return new Point(this.x, this.y + delta);
  }

  toString() {
    return `[${this.x},${this.y}`;
  }
}
