const outputElement = document.getElementById("text");
const url = "insert link from your browser here"

const client = new GameClient(url, {
  onUpdate: board => {
    outputElement.value = board.toString();
  },

  log: message => {
    console.log(message);
    outputElement.value += message;
  }
});

client.run(board => {
  const random = Math.floor(Math.random() * 4);
  const randomDirection = Object.keys(DIRECTIONS)[random];
  const isActing = Math.random() < 0.5;

  return new Action(randomDirection, isActing);
});
