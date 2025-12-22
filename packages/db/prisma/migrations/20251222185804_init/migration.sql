-- CreateEnum
CREATE TYPE "RegistryType" AS ENUM ('registry:lib', 'registry:block', 'registry:component', 'registry:ui', 'registry:hook', 'registry:theme', 'registry:page', 'registry:file', 'registry:style', 'registry:base', 'registry:font', 'registry:item');

-- CreateTable
CREATE TABLE "registries" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "homepage" TEXT,
    "url" TEXT,
    "repo" TEXT,

    CONSTRAINT "registries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registries_items" (
    "id" SERIAL NOT NULL,
    "registry_id" INTEGER,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "registry_deps" TEXT,
    "deps" TEXT,
    "type" "RegistryType",

    CONSTRAINT "registries_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registries_items_files" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER,
    "path" TEXT,
    "content" TEXT,
    "type" "RegistryType",

    CONSTRAINT "registries_items_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registries_repos" (
    "id" SERIAL NOT NULL,
    "registry_id" INTEGER,
    "url" TEXT,
    "owner" TEXT,
    "repo" TEXT,
    "stars" INTEGER,

    CONSTRAINT "registries_repos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registry_item_states" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER,
    "updated" BOOLEAN,
    "created" BOOLEAN,
    "breaking_changes" BOOLEAN,

    CONSTRAINT "registry_item_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registry_item_diffs" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER,
    "content" TEXT,

    CONSTRAINT "registry_item_diffs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registries_items" ADD CONSTRAINT "registries_items_registry_id_fkey" FOREIGN KEY ("registry_id") REFERENCES "registries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registries_items_files" ADD CONSTRAINT "registries_items_files_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "registries_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registries_repos" ADD CONSTRAINT "registries_repos_registry_id_fkey" FOREIGN KEY ("registry_id") REFERENCES "registries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registry_item_states" ADD CONSTRAINT "registry_item_states_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "registries_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registry_item_diffs" ADD CONSTRAINT "registry_item_diffs_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "registries_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
