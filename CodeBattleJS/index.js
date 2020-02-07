const outputElement = document.getElementById("text");
const url =
  "http://epruizhsa0001t2:8080/codenjoy-contest/board/player/1g1z6yb04udfp18d6hms?code=2897168687142116884&gameName=snakebattle";

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
