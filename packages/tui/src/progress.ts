import ora from "ora";

export const progress = () => {
  const spinner = ora();

  if (process.env.NODE_ENV !== "development") {
    return {
      start: () => {},
      step: () => {},
      fail: () => {},
      succeed: () => {},
    };
  }

  return {
    start: (message: string) => {
      spinner.text = message;
      spinner.start();
    },
    step: (message: string) => {
      spinner.text = message;
    },
    fail: (message: string) => {
      spinner.fail(message);
    },
    succeed: (message: string) => {
      spinner.succeed(message);
    },
  };
};
