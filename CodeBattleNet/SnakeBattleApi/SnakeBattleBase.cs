using System;
using WebSocketSharp;

namespace SnakeBattle.Api
{
    public abstract class SnakeBattleBase
    {
        private const string RESPONSE_PREFIX = "board=";
        private readonly WebSocket _socket;

        protected SnakeBattleBase(string url)
        {
            var server = url.Replace("http", "ws").Replace("board/player/", "ws?user=").Replace("?code=", "&code=");
            this._socket = new WebSocket(server);
            _socket.OnMessage += Socket_OnMessage;
            _socket.OnClose += Socket_OnClose;
            _socket.OnError += Socket_OnError;
            _socket.OnOpen += Socket_OnOpen;
        }

        private void Socket_OnOpen(object sender, EventArgs e)
        {
            Console.WriteLine("Connection established");
        }

        private void Socket_OnError(object sender, ErrorEventArgs e)
        {
            Console.WriteLine("### error ###");
        }

        private void Socket_OnClose(object sender, CloseEventArgs e)
        {
            Console.WriteLine("### disconnected ###");
        }


        /// <summary>
        /// Set this property to true to finish playing
        /// </summary>
        public bool ShouldExit { get; protected set; }

        protected abstract string DoMove(GameBoard gameBoard);

        private void Socket_OnMessage(object sender, MessageEventArgs e)
        {
            if (!ShouldExit)
            {
                var response = e.Data;

                if (!response.StartsWith(RESPONSE_PREFIX))
                {
                    Console.WriteLine("Something strange is happening on the server... Response:\n{0}", response);
                    ShouldExit = true;
                }
                else
                {
                    var boardString = response.Substring(RESPONSE_PREFIX.Length);

                    var action = DoMove(new GameBoard(boardString));

                    ((WebSocket)sender).Send(action);
                }
            }
        }



        protected void Connect()
        {
            this._socket.Connect(); 
        }
    }
}
