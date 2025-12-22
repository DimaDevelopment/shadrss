-- CreateTable
CREATE TABLE "invalid_registries" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "homepage" TEXT,
    "url" TEXT,
    "repo" TEXT,

    CONSTRAINT "invalid_registries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invalid_registries_name_key" ON "invalid_registries"("name");
