#include "GameBoard.h"

GameBoard::GameBoard(BoardElement** map, int map_size)
{
	this->map = map;
	this->map_size = map_size;
}


bool GameBoard::hasElementAt(BoardPoint point, BoardElement element) {
	if (point.isOutOfBoard(map_size)) {
		return false;
	}
	return getElementAt(point) == element;
}
BoardElement GameBoard::getElementAt(BoardPoint point) {
	return map[point.getX()][point.getY()];
}
std::list<BoardPoint> GameBoard::findAllElements(BoardElement element) {
	std::list<BoardPoint> result;
	for (uint32_t j = 0; j < map_size; j++)
	{
		for (uint32_t i = 0; i < map_size; i++)
		{
			if (map[j][i] == element) {
				result.push_back(BoardPoint(j, i));
			}
		}
	}
	return result;
}
void GameBoard::printBoard() {

}
BoardPoint GameBoard::getMyHead() {
	std::list<BoardPoint> result = findAllElements(BoardElement::HEAD_DEAD);
	result.splice(result.end(), findAllElements(BoardElement::HEAD_DOWN));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_UP));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_LEFT));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_RIGHT));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_EVIL));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_FLY));
	result.splice(result.end(), findAllElements(BoardElement::HEAD_SLEEP));
	return result.front();
}
std::list<BoardPoint> GameBoard::getWalls() {
	return findAllElements(BoardElement::WALL);
}
bool GameBoard::isBarrierAt(BoardPoint point) {
	std::list<BoardPoint> result = getBarriers();
	BoardPoint resultPoint = result.front();
	return resultPoint == point;
}
std::list<BoardPoint> GameBoard::getStones() {
	return findAllElements(BoardElement::STONE);
}
std::list<BoardPoint> GameBoard::getApples() {
	return findAllElements(BoardElement::APPLE);
}
bool GameBoard::amIEvil() {
	std::list<BoardPoint> headEvil = findAllElements(BoardElement::HEAD_EVIL);
	if (!headEvil.empty()) {
		return true;
	}
	return false;
}
bool GameBoard::amIFlying() {
	std::list<BoardPoint> headFly = findAllElements(BoardElement::HEAD_FLY);
	if (!headFly.empty()) {
		return true;
	}
	return false;
}
std::list<BoardPoint> GameBoard::getFlyingPills() {
	return findAllElements(BoardElement::FLYING_PILL);
}
std::list<BoardPoint> GameBoard::getFuryPills() {
	return findAllElements(BoardElement::FURY_PILL);
}
std::list<BoardPoint> GameBoard::getGold() {
	return findAllElements(BoardElement::GOLD);
}
std::list<BoardPoint> GameBoard::getStartPoints() {
	return findAllElements(BoardElement::START_FLOOR);
}
std::list<BoardPoint> GameBoard::getBarriers() {
	std::list<BoardPoint> result = findAllElements(BoardElement::WALL);
	result.splice(result.end(), findAllElements(BoardElement::START_FLOOR));
	result.splice(result.end(), findAllElements(BoardElement::ENEMY_HEAD_SLEEP));
	result.splice(result.end(), findAllElements(BoardElement::ENEMY_TAIL_INACTIVE));
	result.splice(result.end(), findAllElements(BoardElement::TAIL_INACTIVE));
	result.splice(result.end(), findAllElements(BoardElement::STONE));
	return result;
}

GameBoard::~GameBoard()
{
	delete map;
}

