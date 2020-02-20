using SnakeBattle.Api;
using System;

namespace Client
{
    class Program
    {
        const string SERVER_ADDRESS = "http://epruizhsa0001t2:8080/codenjoy-contest/board/player/4ol1pue9vqijd518yjlb?code=1180389975885916399&gameName=snakebattle";

        static void Main(string[] args)
        {
            var client = new SnakeBattleClient(SERVER_ADDRESS);
            client.Run(DoRun);

            Console.ReadKey();
            client.InitiateExit();
        }

        private static SnakeAction DoRun(GameBoard gameBoard)
        {
            var random = new Random();
            var direction = (Direction)random.Next(Enum.GetValues(typeof(Direction)).Length);
            var act = random.Next() % 2 == 0;
            return new SnakeAction(act, direction);
        }
    }
}