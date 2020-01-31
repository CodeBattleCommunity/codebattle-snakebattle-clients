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

  get size() {
    return Math.sqrt(this._board.length);
  }

  isAt(x, y, element) {
    if (new Point(x, y).isOutOf(this._size)) {
      return false;
    }
    return this.getAt(x, y) == element;
  }

  findAll(element) {
    let result = [];
    for (let i = 0; i < this._size * this._size; i++) {
      let point = this._xyl.getXY(i);
      if (this.isAt(point.x, point.y, element)) {
        result.push(point);
      }
    }
    return result;
  }

  getAt(x, y) {
    if (new Point(x, y).isOutOf(this._size)) {
      return Element.WALL;
    }
    return this._board.charAt(this._xyl.getLength(x, y));
  }

  LengthToXY() {
    let size = this._size;
    function inversionY(y) {
      return size - 1 - y;
    }

    function inversionX(x) {
      return x;
    }
    return {
      getXY: function(length) {
        if (length == -1) {
          return null;
        }
        var x = inversionX(length % size);
        var y = inversionY(Math.ceil(length / size));
        return new Point(x, y);
      },

      getLength: function(x, y) {
        var xx = inversionX(x);
        var yy = inversionY(y);
        return yy * size + xx;
      }
    };
  }

  contains(a, obj) {
    var i = a.length;
    while (i--) {
      if (a[i].equals(obj)) {
        return true;
      }
    }
    return false;
  }

  removeDuplicates(all) {
    var result = [];
    for (var index in all) {
      var point = all[index];
      if (!contains(result, point)) {
        result.push(point);
      }
    }
    return result;
  }

  printArray(array) {
    var result = [];
    for (var index in array) {
      var element = array[index];
      result.push(element.toString());
    }
    return "[" + result + "]";
  }

  toString() {
    return (
      "Tank at: " +
      this.getPlayerTank +
      "\n" +
      "Other Tanks at: " +
      this.printArray(this.getOtherPlayersTanks) +
      "\n" +
      "Bot tanks at: " +
      this.printArray(this.getBotsTanks) +
      "\n" +
      this.boardAsString +
      "\n"
    );
  }

  isAnyOfAt(x, y, elements) {
    for (var index in elements) {
      var element = elements[index];
      if (this.isAt(x, y, element)) {
        return true;
      }
    }
    return false;
  }

  isNear(x, y, element) {
    if (new Point(x, y).isOutOf(this._size)) {
      return false;
    }
    return (
      this.isAt(x + 1, y, element) ||
      this.isAt(x - 1, y, element) ||
      this.isAt(x, y + 1, element) ||
      this.isAt(x, y - 1, element)
    );
  }

  isBarrierAt(x, y) {
    return contains(this.getBarriers, new Point(x, y));
  }

  countNear(x, y, element) {
    if (new Point(x, y).isOutOf(this._size)) {
      return 0;
    }
    var count = 0;
    if (this.isAt(x - 1, y, element)) count++; // TODO to remove duplicate
    if (this.isAt(x + 1, y, element)) count++;
    if (this.isAt(x, y - 1, element)) count++;
    if (this.isAt(x, y + 1, element)) count++;
    return count;
  }

  get getPlayerTank() {
    var result = [];
    result = result.concat(this.findAll(Element.TANK_UP));
    result = result.concat(this.findAll(Element.TANK_DOWN));
    result = result.concat(this.findAll(Element.TANK_LEFT));
    result = result.concat(this.findAll(Element.TANK_RIGHT));
    return result[0];
  }
  get getOtherPlayersTanks() {
    var result = [];
    result = result.concat(this.findAll(Element.OTHER_TANK_UP));
    result = result.concat(this.findAll(Element.OTHER_TANK_LEFT));
    result = result.concat(this.findAll(Element.OTHER_TANK_RIGHT));
    result = result.concat(this.findAll(Element.OTHER_TANK_DOWN));
    return result;
  }

  get getBotsTanks() {
    var result = [];
    result = result.concat(this.findAll(Element.AI_TANK_UP));
    result = result.concat(this.findAll(Element.AI_TANK_DOWN));
    result = result.concat(this.findAll(Element.AI_TANK_LEFT));
    result = result.concat(this.findAll(Element.AI_TANK_RIGHT));
    return result;
  }

  get getBullets() {
    var result = [];
    result.concat(this.findAll(Element.BULLET));
    return result;
  }

  get getConstructions() {
    var result = [];
    return result.concat(this.findAll(Element.CONSTRUCTION));
  }

  get getDestroyedConstructions() {
    var result = [];
    result = result.concat(this.findAll(Element.CONSTRUCTION_DESTROYED_DOWN));
    result = result.concat(this.findAll(Element.CONSTRUCTION_DESTROYED_UP));
    result = result.concat(this.findAll(Element.CONSTRUCTION_DESTROYED_LEFT));
    result = result.concat(this.findAll(Element.CONSTRUCTION_DESTROYED_RIGHT));
    result = result.concat(this.findAll(Element.CONSTRUCTION_DESTROYED_LEFT));
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_DOWN_TWICE)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_UP_TWICE)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_LEFT_TWICE)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_RIGHT_TWICE)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_DOWN_LEFT)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_DOWN_RIGHT)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_UP_LEFT)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_UP_RIGHT)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_LEFT_RIGHT)
    );
    result = result.concat(
      this.findAll(Element.CONSTRUCTION_DESTROYED_UP_DOWN)
    );
    return result;
  }

  get getWalls() {
    return this.findAll(Element.BATTLE_WALL);
  }

  get getBarriers() {
    var all = getConstructions;
    all = all.concat(this.getWalls);
    all = all.concat(this.getConstructions);
    all = all.concat(this.getDestroyedConstructions);
    all = all.concat(this.getOtherPlayersTanks);
    all = all.concat(this.getBotsTanks);
    return all;
  }

  toString() {
    const lineRegExp = new RegExp(`(.{${this.size}})`, "g");

    return this._board.replace(lineRegExp, "\n$1");
  }

  findAllElements = elementType => {
    return this._board.split('').reduce((elements, element, index) => {
      if (element === elementType) {
        const point = this.getPointByShift(index);
        elements.push(point);
      }

      return elements;
    }, []);
  };

  getPointByShift = shift => {
    return new Point(shift % this.size, Math.floor(shift / this.size));
  };
}
