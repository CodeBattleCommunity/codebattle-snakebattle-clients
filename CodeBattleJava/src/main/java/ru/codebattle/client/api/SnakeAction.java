package ru.codebattle.client.api;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@RequiredArgsConstructor
@Getter
public class SnakeAction {
  private static final String ACT_COMMAND_PREFIX = "ACT,";

  private final boolean act;
  private final Direction direction;

  @Override
  public String toString() {
    var cmd = act ? ACT_COMMAND_PREFIX : "";
    return cmd + direction.toString();
  }
}
