/*
  Warnings:

  - The `type` column on the `registries_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `registries_items_files` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "registries_items" DROP COLUMN "type",
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "registries_items_files" DROP COLUMN "type",
ADD COLUMN     "type" TEXT;

-- DropEnum
DROP TYPE "RegistryType";
