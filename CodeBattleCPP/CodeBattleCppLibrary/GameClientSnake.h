#pragma once

#include <string>
#include <thread>
#include "easywsclient\easywsclient.hpp"
#ifdef _WIN32
#pragma comment( lib, "ws2_32" )
#include <WinSock2.h>
#endif
#include <assert.h>
#include <stdio.h>
#include <iostream>
#include <string>
#include <memory>
#include <functional>

#include "BoardElement.h"
#include "SnakeAction.h"
#include "GameBoard.h"

class GameClientSnake
{
	BoardElement **map;
	GameBoard *board;
	uint32_t map_size, player_x, player_y;

	easywsclient::WebSocket *web_socket;
	std::string path;

	bool is_running;
	std::thread *work_thread;
	void update_func(std::function<void()> _message_handler);

public:
	GameClientSnake(std::string _server);
	~GameClientSnake();

	void Run(std::function<void()> _message_handler);
	
	void SnakeAction(SnakeAction action = SnakeAction::STOP) {
		switch (action)
		{
		case SnakeAction::DRILL_LEFT:
			send(std::string("ACT,LEFT"));
			break;
		case SnakeAction::DRILL_RIGHT:
			send(std::string("ACT,RIGHT"));
			break;
		case SnakeAction::GO_DOWN:
			send(std::string("DOWN"));
			break;
		case SnakeAction::GO_UP:
			send(std::string("UP"));
			break;
		case SnakeAction::GO_LEFT:
			send(std::string("LEFT"));
			break;
		case SnakeAction::GO_RIGHT:
			send(std::string("RIGHT"));
			break;
		case SnakeAction::SUICIDE:
			send(std::string("ACT(0)"));
			break;
		case SnakeAction::DRILL:
			send(std::string("ACT"));
			break;
		case SnakeAction::STOP:
			break;
		default:
			send(std::string("STOP"));
			break;
		}
	}

	GameBoard* get_GameBoard() { return board; }
private:
	void send(std::string msg)
	{
		std::cout << "Sending: " << msg << std::endl;
		web_socket->send(msg);
	}
};
