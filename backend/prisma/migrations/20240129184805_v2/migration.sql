/*
  Warnings:

  - You are about to drop the column `keresztnev` on the `felhasználók` table. All the data in the column will be lost.
  - You are about to drop the column `vezeteknev` on the `felhasználók` table. All the data in the column will be lost.
  - Added the required column `felhasznalonev` to the `Felhasználók` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `felhasználók` DROP COLUMN `keresztnev`,
    DROP COLUMN `vezeteknev`,
    ADD COLUMN `felhasznalonev` VARCHAR(191) NOT NULL;
