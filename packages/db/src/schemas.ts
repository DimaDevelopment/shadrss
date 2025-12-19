import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const demoUsers = pgTable("demo_users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});
