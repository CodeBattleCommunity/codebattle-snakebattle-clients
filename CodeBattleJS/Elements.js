const ELEMENTS = {
  NONE: " ", // пустое место
  WALL: "☼", // а это стенка
  START_FLOOR: "#", // место старта змей
  OTHER: "?", // этого ты никогда не увидишь :)
  APPLE: "○", // яблоки надо кушать от них становишься длинее
  STONE: "●", // а это кушать не стоит - от этого укорачиваешься
  FLYING_PILL: "©", // таблетка полета - дает суперсилы
  FURY_PILL: "®", // таблетка ярости - дает суперсилы
  GOLD: "$", // золото - просто очки
  HEAD_DOWN: "▼", // голова твоей змеи в разных состояниях и напрвлениях
  HEAD_LEFT: "◄",
  HEAD_RIGHT: "►",
  HEAD_UP: "▲",
  HEAD_DEAD: "☻", // этот раунд ты проиграл
  HEAD_EVIL: "♥", // ты скушал таблетку ярости
  HEAD_FLY: "♠", // ты скушал таблетку полета
  HEAD_SLEEP: "&", // твоя змейка ожидает начала раунда
  TAIL_END_DOWN: "╙", // хвост твоей змейки
  TAIL_END_LEFT: "╘",
  TAIL_END_UP: "╓",
  TAIL_END_RIGHT: "╕",
  TAIL_INACTIVE: "~",
  BODY_HORIZONTAL: "═", // туловище твоей змейки
  BODY_VERTICAL: "║",
  BODY_LEFT_DOWN: "╗",
  BODY_LEFT_UP: "╝",
  BODY_RIGHT_DOWN: "╔",
  BODY_RIGHT_UP: "╚",
  ENEMY_HEAD_DOWN: "˅", // змейки противников
  ENEMY_HEAD_LEFT: "<",
  ENEMY_HEAD_RIGHT: ">",
  ENEMY_HEAD_UP: "˄",
  ENEMY_HEAD_DEAD: "☺", // этот раунд противник проиграл
  ENEMY_HEAD_EVIL: "♣", // противник скушал таблетку ярости
  ENEMY_HEAD_FLY: "♦", // противник скушал таблетку полета
  ENEMY_HEAD_SLEEP: "ø", // змейка противника ожидает начала раунда
  ENEMY_TAIL_END_DOWN: "¤", // хвосты змеек противников
  ENEMY_TAIL_END_LEFT: "×",
  ENEMY_TAIL_END_UP: "æ",
  ENEMY_TAIL_END_RIGHT: "ö",
  ENEMY_TAIL_INACTIVE: "*",
  ENEMY_BODY_HORIZONTAL: "─", // туловище змеек противников
  ENEMY_BODY_VERTICAL: "│",
  ENEMY_BODY_LEFT_DOWN: "┐",
  ENEMY_BODY_LEFT_UP: "┘",
  ENEMY_BODY_RIGHT_DOWN: "┌",
  ENEMY_BODY_RIGHT_UP: "└"
};
