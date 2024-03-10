/*
  Warnings:

  - You are about to drop the column `SzalID` on the `rendelesek` table. All the data in the column will be lost.
  - You are about to drop the column `fizID` on the `rendelesek` table. All the data in the column will be lost.
  - You are about to drop the `fizmodok` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `szalmodok` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `SzalMod` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fizMod` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `rendelesek` DROP FOREIGN KEY `Rendelesek_SzalID_fkey`;

-- DropForeignKey
ALTER TABLE `rendelesek` DROP FOREIGN KEY `Rendelesek_fizID_fkey`;

-- AlterTable
ALTER TABLE `rendelesek` DROP COLUMN `SzalID`,
    DROP COLUMN `fizID`,
    ADD COLUMN `SzalMod` VARCHAR(191) NOT NULL,
    ADD COLUMN `fizMod` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `fizmodok`;

-- DropTable
DROP TABLE `szalmodok`;
