package ru.codebattle.client;

import java.util.function.Function;
import ru.codebattle.client.api.GameBoard;
import ru.codebattle.client.api.SnakeAction;
import ru.codebattle.client.api.SnakeBattleBase;

import java.net.URISyntaxException;

public class SnakeBattleClient extends SnakeBattleBase {

    private Function<GameBoard, SnakeAction> callback;

    public SnakeBattleClient(String url) throws URISyntaxException {
        super(url);
    }

    public void run(Function<GameBoard, SnakeAction> callback) {
        connect();
        this.callback = callback;
    }

    @Override
    protected String doMove(GameBoard gameBoard) {
        clearScreen();
        gameBoard.printBoard();
        SnakeAction action = callback.apply(gameBoard);
        var command = action.toString();
        System.out.println(command);
        return command;
    }

    public void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    public void initiateExit()
    {
        setShouldExit(true);
    }
}
