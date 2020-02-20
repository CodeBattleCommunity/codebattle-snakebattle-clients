namespace SnakeBattle.Api
{
    public struct BoardPoint
    {
        public int X { get; private set; }

        public int Y { get; private set; }

        public BoardPoint(int x, int y)
        {
            X = x;
            Y = y;
        }

        /// <summary>
        /// Checks is current point on board or out of range.
        /// </summary>
        /// <param name="boardSize">Board size to compare</param>
        public bool IsOutOfBoard(int boardSize)
        {
            return X >= boardSize || Y >= boardSize || X < 0 || Y < 0;
        }

        /// <summary>
        /// Returns new BoardPoint object shifted left to "delta" points
        /// </summary>
        public BoardPoint ShiftLeft(int delta = 1)
        {
            return new BoardPoint(X - delta, Y);
        }

        /// <summary>
        /// Returns new BoardPoint object shifted right to "delta" points
        /// </summary>
        public BoardPoint ShiftRight(int delta = 1)
        {
            return new BoardPoint(X + delta, Y);
        }

        /// <summary>
        /// Returns new BoardPoint object shifted top "delta" points
        /// </summary>
        public BoardPoint ShiftTop(int delta = 1)
        {
            return new BoardPoint(X, Y - delta);
        }

        /// <summary>
        /// Returns new BoardPoint object shifted bottom "delta" points
        /// </summary>
        public BoardPoint ShiftBottom(int delta = 1)
        {
            return new BoardPoint(X, Y + delta);

        }

        public static bool operator ==(BoardPoint p1, BoardPoint p2)
        {
            return p1.X == p2.X && p1.Y == p2.Y;
        }

        public static bool operator !=(BoardPoint p1, BoardPoint p2)
        {
            return !(p1 == p2);
        }

        public override string ToString()
        {
            return $"[{X},{Y}]";
        }

        public override bool Equals(object obj)
        {
            return obj is BoardPoint boardPoint && boardPoint == this;
        }

        public override int GetHashCode()
        {
            const int mult = 17;
            unchecked
            {
                return (X.GetHashCode() * mult) ^ Y.GetHashCode();
            }
        }
    }
}
