/*
  Warnings:

  - Added the required column `jelenlegiar` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rendelesazonosito` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rendelesek` ADD COLUMN `jelenlegiar` INTEGER NOT NULL,
    ADD COLUMN `mennyiseg` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `rendelesazonosito` VARCHAR(191) NOT NULL;
