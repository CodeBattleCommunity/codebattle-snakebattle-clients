#pragma once

#include "BoardElement.h"
#include "BoardPoint.h"
#include <list>

class GameBoard
{
public:
	GameBoard(BoardElement** map, int map_size);
	bool hasElementAt(BoardPoint point, BoardElement element);
	BoardElement getElementAt(BoardPoint point);
	void printBoard();
	std::list<BoardPoint> findAllElements(BoardElement element);
	//BoardPoint findElement(BoardElement element);
	BoardPoint getMyHead();
	std::list<BoardPoint> getWalls();
	bool isBarrierAt();
	std::list<BoardPoint> getStones();
	std::list<BoardPoint> getApples();
	bool amIEvil();
	bool amIFlying();
	std::list<BoardPoint> getFlyingPills();
	std::list<BoardPoint> getFuryPills();
	std::list<BoardPoint> getGold();
	std::list<BoardPoint> getStartPoints();
	std::list<BoardPoint> getBarriers();
	~GameBoard();

private:
	BoardElement** map;
	int map_size;
};