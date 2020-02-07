const ACT_COMMAND_PREFIX = "ACT,";

class Action {
  constructor(direction, act) {
    this.direction = direction;
    this.act = act;
  }

  toString() {
    const command = this.act ? ACT_COMMAND_PREFIX : "";
    return command + this.direction;
  }
}
