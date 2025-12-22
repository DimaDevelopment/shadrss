/*
  Warnings:

  - A unique constraint covering the columns `[registry_id,name]` on the table `registries_items` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "registries_items_registry_id_name_key" ON "registries_items"("registry_id", "name");
