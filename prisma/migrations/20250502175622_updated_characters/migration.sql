/*
  Warnings:

  - You are about to drop the column `attackMultiplayer` on the `characters` table. All the data in the column will be lost.
  - Added the required column `attackMultiplier` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "attackMultiplayer",
ADD COLUMN     "attackMultiplier" DOUBLE PRECISION NOT NULL;
