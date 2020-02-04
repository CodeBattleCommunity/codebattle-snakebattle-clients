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

  run = callback => {
    this.socket = new WebSocket(this.path);
    this.socket.onopen = this.onOpen;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = event => {
      this.board.update(event.data);
      this.onUpdate(event.data);
      this.send("RIGHT");
    };
  };

  onUpdate = data => {
    document.getElementById("text").value = this.board.toString();
  };

  onOpen = () => {
    this._log("Connection established\n");
  };

  onClose = event => {
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
  };

  onError = error => {
    this._log("### error ###\n" + error.message + "\n");
  };

  send = msg => {
    this._log("Sending: " + msg + "\n");
    this.socket.send(msg);
  };
}
