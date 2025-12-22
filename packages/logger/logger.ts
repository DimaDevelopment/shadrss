import { cyan, green, red, yellow } from "kleur/colors";

export const highlighter = {
  error: red,
  warn: yellow,
  info: cyan,
  success: green,
};

export const logger = {
  error(...args: unknown[]) {
    console.log(highlighter.error(args.join(" ")));
  },
  warn(...args: unknown[]) {
    console.log(highlighter.warn(args.join(" ")));
  },
  info(...args: unknown[]) {
    console.log(highlighter.info(args.join(" ")));
  },
  json(data: any) {
    console.log(highlighter.info(JSON.stringify(data, null, 2)));
  },
  success(...args: unknown[]) {
    console.log(highlighter.success(args.join(" ")));
  },
  log(...args: unknown[]) {
    console.log(args.join(" "));
  },
  break() {
    console.log("");
  },
};
