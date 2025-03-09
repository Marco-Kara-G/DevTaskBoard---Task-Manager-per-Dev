/*
  Warnings:

  - You are about to drop the `Languages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Languages" DROP CONSTRAINT "Languages_project_id_fkey";

-- DropTable
DROP TABLE "Languages";
