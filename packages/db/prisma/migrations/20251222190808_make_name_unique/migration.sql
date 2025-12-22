/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `registries` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "registries_name_key" ON "registries"("name");
