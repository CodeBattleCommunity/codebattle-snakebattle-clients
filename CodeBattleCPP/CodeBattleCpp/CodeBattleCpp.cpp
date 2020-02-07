#include <iostream>
#include <random>

#include "GameClientSnake.h"

void main()
{
	srand(time(0));

	GameClientSnake *gcb = new GameClientSnake("http://localhost:8080/codenjoy-contest/board/player/82bc5roztht315o8f5yc?code=3242242588940318227&gameName=snakebattle");
	gcb->Run([&]()
	{
			GameBoard* gb = gcb->get_GameBoard();

			bool done = false;
			switch (rand() % 12) {
				case 0: gcb->Up(); done = true; break;
				case 1: gcb->Down(); done = true; break;
				case 2: gcb->Right(); done = true; break;
				case 3: gcb->Left(); done = true; break;
				case 4: gcb->Up(SnakeAction::AfterTurn); done = true; break;
				case 5: gcb->Down(SnakeAction::AfterTurn); done = true; break;
				case 6: gcb->Left(SnakeAction::AfterTurn); done = true; break;
				case 7: gcb->Right(SnakeAction::AfterTurn); done = true; break;
				case 8: gcb->Up(SnakeAction::BeforeTurn); done = true; break;
				case 9: gcb->Down(SnakeAction::BeforeTurn); done = true; break;
				case 10: gcb->Left(SnakeAction::BeforeTurn); done = true; break;
				case 11: gcb->Right(SnakeAction::BeforeTurn); done = true; break;
			}
			if (!done) {
				gcb->Blank();
			}
	});

	getchar();
}
