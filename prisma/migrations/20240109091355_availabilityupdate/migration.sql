/*
  Warnings:

  - You are about to drop the column `availabilty` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "availabilty",
ADD COLUMN     "availability" TEXT;
