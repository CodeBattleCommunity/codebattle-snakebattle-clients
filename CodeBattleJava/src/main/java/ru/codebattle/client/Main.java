package ru.codebattle.client;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Random;
import ru.codebattle.client.api.Direction;
import ru.codebattle.client.api.SnakeAction;

public class Main {

    private static final String SERVER_ADDRESS = "http://localhost:8080/codenjoy-contest/board/player/6mlolfpaekvspk868rdh?code=1855478191833212450&gameName=snakebattle";

    public static void main(String[] args) throws URISyntaxException, IOException {
        SnakeBattleClient client = new SnakeBattleClient(SERVER_ADDRESS);
        client.run(gameBoard -> {
            var random = new Random(System.currentTimeMillis());
            var direction = Direction.values()[random.nextInt(Direction.values().length)];
            var act = random.nextInt() % 2 == 0;
            return new SnakeAction(act, direction);
        });

        System.in.read();

        client.initiateExit();
    }
}
