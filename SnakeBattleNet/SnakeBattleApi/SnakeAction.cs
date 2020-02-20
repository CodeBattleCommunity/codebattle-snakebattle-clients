namespace SnakeBattle.Api
{
    public class SnakeAction
    {
        private const string ACT_COMMAND_PREFIX = "ACT,";

        private readonly bool _act;
        private readonly Direction _direction;

        public SnakeAction(bool act, Direction direction)
        {
            _act = act;
            _direction = direction;
        }

        public override string ToString()
        {
            var cmd = _act ? ACT_COMMAND_PREFIX : string.Empty;
            return cmd + _direction;
        }
    }
}
