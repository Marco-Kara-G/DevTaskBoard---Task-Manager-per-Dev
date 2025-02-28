/*
  Warnings:

  - Added the required column `task_id` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "task_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" TEXT NOT NULL,
    "language_name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Languages_language_name_key" ON "Languages"("language_name");

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
