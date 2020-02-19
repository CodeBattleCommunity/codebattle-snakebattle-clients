from snakebattleclient.SnakeBattleClient import GameClient
import random
import logging

from snakebattleclient.internals.SnakeAction import SnakeAction
from snakebattleclient.internals.Board import Board

logging.basicConfig(format='%(asctime)s %(levelname)s:%(message)s',
                    level=logging.INFO)


def turn(gcb: Board):
    action_id = random.randint(0, len(SnakeAction.__members__) - 1)
    return list(SnakeAction.__members__)[action_id]


def main():
    gcb = GameClient(
        "http://epruizhsa0001t2:8080/codenjoy-contest/board/player/ygzwtnd2yae0jn0y8viy?code=1104845394797194217&gameName=snakebattle")
    gcb.run(turn)

if __name__ == '__main__':
    main()