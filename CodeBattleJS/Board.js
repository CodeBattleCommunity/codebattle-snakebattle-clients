class Board {
  constructor() {
    this._board = "";
  }

  parse(raw) {
    const board = raw.replace("board=", "");
    return board;
  }

  update(raw) {
    this._board = this.parse(raw);
  }

  _getBoardAsArray = () => this._board.split("");
  _getMappedBoard = () =>
    this._board.split("").map((element, index) => {
      return { type: element, coordinates: this.getPointByShift(index) };
    });

  get size() {
    return Math.sqrt(this._board.length);
  }

  toString() {
    const lineRegExp = new RegExp(`(.{${this.size}})`, "g");
    return this._board.replace(lineRegExp, "$1\n");
  }

  findAllElements = elementType => {
    return this._getBoardAsArray().reduce((elements, element, index) => {
      if (typeof elementType === "string" && element === elementType) {
        const point = this.getPointByShift(index);
        elements.push(point);
      }

      if (elementType instanceof Array && elementType.includes(element)) {
        const point = this.getPointByShift(index);
        elements.push(point);
      }

      return elements;
    }, []);
  };

  findElement = elementType => {
    const foundElements = this._getMappedBoard()
      .filter(element => element.type === elementType)
      .map(element => element.coordinates);

    return foundElements[0];
  };

  getPointByShift = shift =>
    new Point(shift % this.size, Math.floor(shift / this.size));

  getGold = () => this.findAllElements(ELEMENTS.FURY_PILL);
  getWalls = () => this.findAllElements(ELEMENTS.WALL);
  getStones = () => this.findAllElements(ELEMENTS.STONE);
  getApples = () => this.findAllElements(ELEMENTS.APPLE);
  getFuryPills = () => this.findAllElements(ELEMENTS.FURY_PILL);
  getStartPoints = () => this.findAllElements(ELEMENTS.START_FLOOR);
  getFlyingPills = () => this.findAllElements(ELEMENTS.FLYING_PILL);
  getBarriers = () => {
    const elementTypes = [
      "WALL",
      "START_FLOOR",
      "ENEMY_HEAD_SLEEP",
      "ENEMY_TAIL_INACTIVE",
      "TAIL_INACTIVE",
      "STONE"
    ].map(elementName => ELEMENTS[elementName]);

    return this.findAllElements(elementTypes);
  };
}
