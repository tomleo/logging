import { assertSpyCall, spy } from "jsr:@std/testing/mock";
import { createLogger, CRITICAL, DEBUG, ERROR, INFO, WARNING } from "./main.ts";

Deno.test("debug log level", () => {
  // Arrange
  const logger = createLogger(DEBUG);
  const logSpy = spy(console, "log");

  // Act
  logger.debug("Debug statement");
  logger.info("Info statement");
  logger.warning("Warning statement");
  logger.error("Error statement");
  logger.critical("Critical statement");

  // Assert
  assertSpyCall(logSpy, 0, {
    args: ["Debug statement"],
  });
  assertSpyCall(logSpy, 1, {
    args: ["Info statement"],
  });
  assertSpyCall(logSpy, 2, {
    args: ["Warning statement"],
  });
  assertSpyCall(logSpy, 3, {
    args: ["Error statement"],
  });
  assertSpyCall(logSpy, 4, {
    args: ["Critical statement"],
  });

  // Cleanup
  logSpy.restore();
});

Deno.test("info log level", () => {
  // Arrange
  const logger = createLogger(INFO);
  const logSpy = spy(console, "log");

  // Act
  logger.debug("Debug statement");
  logger.info("Info statement");
  logger.warning("Warning statement");
  logger.error("Error statement");
  logger.critical("Critical statement");

  // Assert
  assertSpyCall(logSpy, 0, {
    args: ["Info statement"],
  });
  assertSpyCall(logSpy, 1, {
    args: ["Warning statement"],
  });
  assertSpyCall(logSpy, 2, {
    args: ["Error statement"],
  });
  assertSpyCall(logSpy, 3, {
    args: ["Critical statement"],
  });

  // Cleanup
  logSpy.restore();
});

Deno.test("warning log level", () => {
  // Arrange
  const logger = createLogger(WARNING);
  const logSpy = spy(console, "log");

  // Act
  logger.debug("Debug statement");
  logger.info("Info statement");
  logger.warning("Warning statement");
  logger.error("Error statement");
  logger.critical("Critical statement");

  // Assert
  assertSpyCall(logSpy, 0, {
    args: ["Warning statement"],
  });
  assertSpyCall(logSpy, 1, {
    args: ["Error statement"],
  });
  assertSpyCall(logSpy, 2, {
    args: ["Critical statement"],
  });

  // Cleanup
  logSpy.restore();
});

Deno.test("error log level", () => {
  // Arrange
  const logger = createLogger(ERROR);
  const logSpy = spy(console, "log");

  // Act
  logger.debug("Debug statement");
  logger.info("Info statement");
  logger.warning("Warning statement");
  logger.error("Error statement");
  logger.critical("Critical statement");

  // Assert
  assertSpyCall(logSpy, 0, {
    args: ["Error statement"],
  });
  assertSpyCall(logSpy, 1, {
    args: ["Critical statement"],
  });

  // Cleanup
  logSpy.restore();
});

Deno.test("error log level", () => {
  // Arrange
  const logger = createLogger(CRITICAL);
  const logSpy = spy(console, "log");

  // Act
  logger.debug("Debug statement");
  logger.info("Info statement");
  logger.warning("Warning statement");
  logger.error("Error statement");
  logger.critical("Critical statement");

  // Assert
  assertSpyCall(logSpy, 0, {
    args: ["Critical statement"],
  });

  // Cleanup
  logSpy.restore();
});
