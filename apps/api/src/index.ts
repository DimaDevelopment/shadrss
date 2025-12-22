import { Elysia } from "elysia";

import { syncRegistry } from "@shadcnrss/sync";

const app = new Elysia()
  .get("/", () => {
    try {
      syncRegistry();
      return "Sync started";
    } catch (e) {
      console.error("Error starting sync:", e);
      return "Error starting sync";
    }
  })
  .listen(3322);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
