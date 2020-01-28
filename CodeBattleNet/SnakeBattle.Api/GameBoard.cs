using System;
using System.Collections.Generic;
using System.Linq;
using static SnakeBattle.Api.BoardElement;

namespace SnakeBattle.Api
{
    public class GameBoard
    {
        public GameBoard(string boardString)
        {
            BoardString = boardString.Replace("\n", "");
            Size = (int)Math.Sqrt(BoardString.Length);
            Square = BoardString.Length;
        }

        /// <summary>
        /// Строка, представляющая собой поле.
        /// </summary>
        public string BoardString { get; private set; }

        /// <summary>
        /// Размер поля.
        /// </summary>
        public int Size { get; private set; }

        /// <summary>
        /// Площадь поля.
        /// </summary>
        public int Square { get; private set; }

        public List<BoardPoint> GetWalls()
        {
            return FindAllElements(Wall);
        }

        public List<BoardPoint> GetStones()
        {
            return FindAllElements(Stone);
        }

        public bool IsBarrierAt(BoardPoint point)
        {
            return GetBarriers().Contains(point);
        }

        public List<BoardPoint> GetApples()
        {
            return FindAllElements(Apple);
        }

        public bool AmIEvil()
        {
            return FindAllElements(HeadEvil).Any(e => e == GetMyHead());
        }

        public bool AmIFlying()
        {
            return FindAllElements(HeadFly).Any(e => e == GetMyHead());
        }

        public List<BoardPoint> GetFlyingPills()
        {
            return FindAllElements(FlyingPill);
        }

        public List<BoardPoint> GetFuryPills()
        {
            return FindAllElements(FuryPill);
        }

        public List<BoardPoint> GetGold()
        {
            return FindAllElements(Gold);
        }

        /// <summary>
        /// Получает список координат стартовых точек.
        /// </summary>
        public List<BoardPoint> GetStartPoints()
        {
            return FindAllElements(StartFloor);
        }

        private List<BoardPoint> GetBarriers()
        {
            return FindAllElements(Wall, StartFloor, EnemyHeadSleep, EnemyTailInactive, TailInactive, Stone);
        }

        /// <summary>
        /// Проверяет имеется ли передаваемый тип элемента в соответствующих координатах.
        /// </summary>
        public bool HasElementAt(BoardPoint point, BoardElement element)
        {
            if (point.IsOutOfBoard(Size))
            {
                return false;
            }

            return GetElementAt(point) == element;
        }

        public BoardElement GetElementAt(BoardPoint point)
        {
            return (BoardElement)BoardString[GetShiftByPoint(point)];
        }

        public void PrintBoard()
        {
            for (int i = 0; i < Size; i++)
            {
                Console.WriteLine(BoardString.Substring(i * Size, Size));
            }
        }

        public BoardPoint? FindElement(BoardElement elementType)
        {
            for (int i = 0; i < Square; i++)
            {
                var point = GetPointByShift(i);
                if (HasElementAt(point, elementType))
                {
                    return point;
                }
            }
            return null;
        }

        /// <summary>
        /// Находит первый попавшийся из перечисления элемент в строке карты <see cref="BoardString"/>
        /// </summary>
        public BoardPoint? FindFirstElement(params BoardElement[] elements)
        {
            for (int i = 0; i < Square; i++)
            {
                var point = GetPointByShift(i);

                foreach(var element in elements)
                {
                    if (HasElementAt(point, element))
                    {
                        return point;
                    }
                }
            }
            return null;
        }

        public List<BoardPoint> FindAllElements(params BoardElement[] elements)
        {
            var result = new List<BoardPoint>();

            for (int i = 0; i < Square; i++)
            {
                var point = GetPointByShift(i);

                foreach(var element in elements)
                {
                    if (HasElementAt(point, element))
                    {
                        result.Add(point);
                    }
                }
            }

            return result;
        }

        public bool HasElementAt(BoardPoint point, params BoardElement[] elements)
        {
            return elements.Any(e => HasElementAt(point, e));
        }

        private int GetShiftByPoint(BoardPoint point)
        {
            return point.Y * Size + point.X;
        }

        private BoardPoint GetPointByShift(int shift)
        {
            return new BoardPoint(shift % Size, shift / Size);
        }

        public BoardPoint? GetMyHead()
        {
            return FindFirstElement(HeadDead, HeadDown, HeadUp, HeadLeft, HeadRight, HeadEvil, HeadFly, HeadSleep);
        }
    }
}
