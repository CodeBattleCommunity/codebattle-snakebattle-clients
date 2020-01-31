class GameClient {
  constructor(url) {
    this.path = url
      .replace("http", "ws")
      .replace("board/player/", "ws?user=")
      .replace("?code=", "&code=");
    // this.board = new Board();
  }

  run(callback) {
    this.socket = new WebSocket(this.path);
    this.socket.onopen = this.onOpen;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = event => {
      //const board = new Board(event.data);
      //const action = callback(board);
      this.send("RIGHT")

      console.log(event);
    };
  }

  get size() {
    return this.socket.size;
  }

  get map() {
    return this.socket.map;
  }

  get playerX() {
    return this.socket.playerX;
  }

  get playerY() {
    return this.socket.playerY;
  }

  set textArea(text) {
    this.text = text;
  }

  onOpen() {
    if (this.text) {
      this.text.value += "Connection established\n";
    }
  }

  onClose(event) {
    if (event.wasClean) {
      this.text.value += "### disconnected ###\n";
    } else {
      this.text.value += "### accidentally disconnected ###\n";
      this.text.value +=
        " - Err code: " + event.code + ", Reason: " + event.reason + "\n";
    }
  }

  onError(error) {
    this.text.value += "### error ###\n" + error.message + "\n";
  }

  send(msg) {
    // this.text.value += "Sending: " + msg + "\n";
    this.socket.send(msg);
  }
}
