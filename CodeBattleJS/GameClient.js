class GameClient {
  constructor(url, options = {}) {
    this.path = url
      .replace("http", "ws")
      .replace("board/player/", "ws?user=")
      .replace("?code=", "&code=");
    this.board = new Board();

    const { onUpdate, log = console.log } = options;
    this._log = log;
    this._onUpdate = onUpdate;
  }

  run(callback) {
    this.socket = new WebSocket(this.path);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
    this.socket.onmessage = event => {
      this.board.update(event.data);
      this._onUpdate(this.board);
      const action = callback(this.board);
      this.send(action);
    };
  }

  onOpen() {
    this._log("Connection established\n");
  }

  onClose(event) {
    if (event.wasClean) {
      return this._log("### disconnected ###\n");
    }

    this._log(
      "### accidentally disconnected ###\n - Err code: " +
        event.code +
        ", Reason: " +
        event.reason +
        "\n"
    );
  }

  onError(error) {
    this._log("### error ###\n" + error.message + "\n");
  }

  send(msg) {
    this._log("Sending: " + msg + "\n");
    this.socket.send(msg);
  }
}
