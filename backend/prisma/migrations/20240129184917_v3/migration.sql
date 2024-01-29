/*
  Warnings:

  - You are about to drop the `felhasználók` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fizetésimódok` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `megrendelések` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rendelések` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `szállításimódok` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `termékek` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `felhasználók`;

-- DropTable
DROP TABLE `fizetésimódok`;

-- DropTable
DROP TABLE `megrendelések`;

-- DropTable
DROP TABLE `rendelések`;

-- DropTable
DROP TABLE `szállításimódok`;

-- DropTable
DROP TABLE `termékek`;

-- CreateTable
CREATE TABLE `Felhasznalok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `felhasznalonev` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `jelszo` VARCHAR(191) NOT NULL,
    `telszam` VARCHAR(191) NOT NULL,
    `szuldatum` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Felhasznalok_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Termekek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `leiras` VARCHAR(191) NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FizModok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SzalModok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rendelesek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datum` VARCHAR(191) NOT NULL,
    `TeljesAr` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RendeltTermekek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mennyiseg` INTEGER NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
