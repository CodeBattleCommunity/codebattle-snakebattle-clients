package ru.codebattle.client.api;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum BoardElement {
    NONE(' '),         // пустое место
    WALL('☼'),         // а это стенка
    START_FLOOR('#'),  // место старта змей
    OTHER('?'),        // этого ты никогда не увидишь :)

    APPLE('○'),        // яблоки надо кушать от них становишься длинее
    STONE('●'),        // а это кушать не стоит - от этого укорачиваешься
    FLYING_PILL('©'),  // таблетка полета - дает суперсилы
    FURY_PILL('®'),    // таблетка ярости - дает суперсилы
    GOLD('$'),         // золото - просто очки

    // голова твоей змеи в разных состояниях и напрвлениях
    HEAD_DOWN('▼'),
    HEAD_LEFT('◄'),
    HEAD_RIGHT('►'),
    HEAD_UP('▲'),
    HEAD_DEAD('☻'),    // этот раунд ты проиграл
    HEAD_EVIL('♥'),    // ты скушал таблетку ярости
    HEAD_FLY('♠'),     // ты скушал таблетку полета
    HEAD_SLEEP('&'),   // твоя змейка ожидает начала раунда

    // хвост твоей змейки
    TAIL_END_DOWN('╙'),
    TAIL_END_LEFT('╘'),
    TAIL_END_UP('╓'),
    TAIL_END_RIGHT('╕'),
    TAIL_INACTIVE('~'),

    // туловище твоей змейки
    BODY_HORIZONTAL('═'),
    BODY_VERTICAL('║'),
    BODY_LEFT_DOWN('╗'),
    BODY_LEFT_UP('╝'),
    BODY_RIGHT_DOWN('╔'),
    BODY_RIGHT_UP('╚'),

    // змейки противников
    ENEMY_HEAD_DOWN('˅'),
    ENEMY_HEAD_LEFT('<'),
    ENEMY_HEAD_RIGHT('>'),
    ENEMY_HEAD_UP('˄'),
    ENEMY_HEAD_DEAD('☺'),   // этот раунд противник проиграл
    ENEMY_HEAD_EVIL('♣'),   // противник скушал таблетку ярости
    ENEMY_HEAD_FLY('♦'),    // противник скушал таблетку полета
    ENEMY_HEAD_SLEEP('ø'),  // змейка противника ожидает начала раунда

    // хвосты змеек противников
    ENEMY_TAIL_END_DOWN('¤'),
    ENEMY_TAIL_END_LEFT('×'),
    ENEMY_TAIL_END_UP('æ'),
    ENEMY_TAIL_END_RIGHT('ö'),
    ENEMY_TAIL_INACTIVE('*'),

    // туловище змеек противников
    ENEMY_BODY_HORIZONTAL('─'),
    ENEMY_BODY_VERTICAL('│'),
    ENEMY_BODY_LEFT_DOWN('┐'),
    ENEMY_BODY_LEFT_UP('┘'),
    ENEMY_BODY_RIGHT_DOWN('┌'),
    ENEMY_BODY_RIGHT_UP('└');

    final char symbol;

    @Override
    public String toString() {
        return String.valueOf(symbol);
    }

    public static BoardElement valueOf(char ch) {
        for (BoardElement el : BoardElement.values()) {
            if (el.symbol == ch) {
                return el;
            }
        }
        throw new IllegalArgumentException("No such element for " + ch);
    }
}
