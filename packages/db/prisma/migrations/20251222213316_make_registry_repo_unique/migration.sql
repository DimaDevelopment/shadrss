/*
  Warnings:

  - A unique constraint covering the columns `[registry_id]` on the table `registries_repos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "registries_repos" ADD COLUMN     "archived" BOOLEAN,
ADD COLUMN     "issues" INTEGER,
ADD COLUMN     "license" TEXT,
ADD COLUMN     "open_issues" INTEGER,
ADD COLUMN     "repo_created_at" TIMESTAMP(3),
ADD COLUMN     "repo_pushed_at" TIMESTAMP(3),
ADD COLUMN     "repo_updated_at" TIMESTAMP(3),
ADD COLUMN     "watchers" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "registries_repos_registry_id_key" ON "registries_repos"("registry_id");
