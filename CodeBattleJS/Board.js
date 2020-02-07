class Board {
  constructor() {
    this._board = "";
  }

  get size() {
    return Math.sqrt(this._board.length);
  }

  findElement(elementType) {
    const foundPoints = this._getMappedBoard()
      .filter(element => element.type === elementType)
      .map(element => element.coordinates);

    return foundPoints[0] || null;
  }

  findFirstElement(...elementTypes) {
    const element = this._getMappedBoard().find(element => {
      return elementTypes.includes(element.type);
    });

    if (!element) {
      return null;
    }

    return element.coordinates;
  }

  findAllElements(...elementTypes) {
    return this._getMappedBoard().reduce((points, element, index) => {
      if (elementTypes.includes(element.type)) {
        points.push(element.coordinates);
      }

      return points;
    }, []);
  }

  getElementAt(point) {
    const element = this._getMappedBoard().find(element => {
      return element.coordinates.equals(point);
    });

    if (!element) {
      return null;
    }

    return element.type;
  }

  hasElementAt(elementType, point) {
    return this.getElementAt(point) === elementType;
  }

  amIEvil() {
    return this.getMyHead() === ELEMENTS.HEAD_EVIL;
  }

  amIFlying() {
    return this.getMyHead() === ELEMENTS.HEAD_FLY;
  }

  getWalls() {
    return this.findAllElements(ELEMENTS.WALL);
  }

  getStones() {
    return this.findAllElements(ELEMENTS.STONE);
  }

  getApples() {
    return this.findAllElements(ELEMENTS.APPLE);
  }

  getGold() {
    return this.findAllElements(ELEMENTS.FURY_PILL);
  }

  getFuryPills() {
    return this.findAllElements(ELEMENTS.FURY_PILL);
  }

  getStartPoints() {
    return this.findAllElements(ELEMENTS.START_FLOOR);
  }

  getFlyingPills() {
    return this.findAllElements(ELEMENTS.FLYING_PILL);
  }

  getMyHead() {
    const headElementTypes = [
      "HEAD_DEAD",
      "HEAD_DOWN",
      "HEAD_UP",
      "HEAD_LEFT",
      "HEAD_RIGHT",
      "HEAD_EVIL",
      "HEAD_FLY",
      "HEAD_SLEEP"
    ].map(elementName => ELEMENTS[elementName]);

    return this.findFirstElement(...headElementTypes);
  }

  getBarriers() {
    const elementTypes = [
      "WALL",
      "START_FLOOR",
      "ENEMY_HEAD_SLEEP",
      "ENEMY_TAIL_INACTIVE",
      "TAIL_INACTIVE",
      "STONE"
    ].map(elementName => ELEMENTS[elementName]);

    return this.findAllElements(...elementTypes);
  }

  isBarrierAt(point) {
    return !!this.getBarriers().find(barrierPoint =>
      barrierPoint.equals(point)
    );
  }

  update(raw) {
    this._board = raw.replace("board=", "");
  }

  _getMappedBoard() {
    return this._board.split("").map((element, index) => {
      return { type: element, coordinates: this.getPointByShift(index) };
    });
  }

  getPointByShift(shift) {
    return new Point(shift % this.size, Math.floor(shift / this.size));
  }

  toString() {
    const lineRegExp = new RegExp(`(.{${this.size}})`, "g");
    return this._board.replace(lineRegExp, "$1\n");
  }
}
