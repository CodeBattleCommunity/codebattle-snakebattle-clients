namespace SnakeBattle.Api
{
    public enum BoardElement : short
    {
        /// <summary>
        /// пустое место
        /// </summary>
        None = (short)' ',

        /// <summary>
        /// стенка
        /// </summary>
        Wall = (short)'☼',

        /// <summary>
        /// место старта змей
        /// </summary>
        StartFloor = (short)'#',

        Other = (short)'?',

        /// <summary>
        /// яблоки надо кушать от них становишься длинее
        /// </summary>
        Apple = (short)'○',

        /// <summary>
        /// а это кушать не стоит - от этого укорачиваешься
        /// </summary>
        Stone = (short)'●',

        /// <summary>
        /// таблетка полета - дает суперсилы
        /// </summary>
        FlyingPill = (short)'©',

        /// <summary>
        /// таблетка ярости - дает суперсилы
        /// </summary>
        FuryPill = (short)'®',

        /// <summary>
        /// золото - просто очки
        /// </summary>
        Gold = (short)'$',

        // голова твоей змеи в разных состояниях и направлениях
        HeadDown = (short)'▼',
        HeadLeft = (short)'◄',
        HeadRight = (short)'►',
        HeadUp = (short)'▲',

        /// <summary>
        /// раунд проигран
        /// </summary>
        HeadDead = (short)'☻',

        /// <summary>
        /// ты скушал таблетку ярости
        /// </summary>
        HeadEvil = (short)'♥',

        /// <summary>
        /// ты скушал таблетку полета
        /// </summary>
        HeadFly = (short)'♠',

        /// <summary>
        /// твоя змейка ожидает начала раунда
        /// </summary>
        HeadSleep = (short)'&',

        // хвост твоей змейки
        TailEndDown = (short)'╙',
        TailEndLeft = (short)'╘',
        TailEndUp = (short)'╓',
        TailEndRight = (short)'╕',
        TailInactive = (short)'~',

        // туловище твоей змейки
        BodyHorizontal = (short)'═',
        BodyVertical = (short)'║',
        BodyLeftDown = (short)'╗',
        BodyLeftUp = (short)'╝',
        BodyRightDown = (short)'╔',
        BodyRightUp = (short)'╚',

        // змейки противников
        EnemyHeadDown = (short)'˅',
        EnemyHeadLeft = (short)'<',
        EnemyHeadRight = (short)'>',
        EnemyHeadUp = (short)'˄',

        /// <summary>
        /// этот раунд противник проиграл
        /// </summary>
        EnemyHeadDead = (short)'☺',

        /// <summary>
        /// противник скушал таблетку ярости
        /// </summary>
        EnemyHeadEvil = (short)'♣',

        /// <summary>
        /// противник скушал таблетку полета
        /// </summary>
        EnemyHeadFly = (short)'♦',

        /// <summary>
        /// змейка противника ожидает начала раунда
        /// </summary>
        EnemyHeadSleep = (short)'ø',

        // хвосты змеек противников
        EnemyTailEndDown = (short)'¤',
        EnemyTailEndLeft = (short)'×',
        EnemyTailEndUp = (short)'æ',
        EnemyTailEndRight = (short)'ö',
        EnemyTailInactive = (short)'*',

        // туловище змеек противников
        EnemyBodyHorizontal = (short)'─',
        EnemyBodyVertical = (short)'│',
        EnemyBodyLeftDown = (short)'┐',
        EnemyBodyLeftUp = (short)'┘',
        EnemyBodyRightDown = (short)'┌',
        EnemyBodyRightUp = (short)'└',
    }
}