-- CreateTable
CREATE TABLE `Termékek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `leiras` VARCHAR(191) NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SzalCimek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orszag` VARCHAR(191) NOT NULL,
    `varos` VARCHAR(191) NOT NULL,
    `utca` VARCHAR(191) NOT NULL,
    `hazszam` INTEGER NOT NULL,
    `iranyitoszam` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fizetésimódok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Szállításimódok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rendelések` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datum` VARCHAR(191) NOT NULL,
    `TeljesAr` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Megrendelések` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mennyiseg` INTEGER NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
