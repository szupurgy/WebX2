-- CreateTable
CREATE TABLE `termekparams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TmkID` INTEGER NOT NULL,
    `kijelzo` INTEGER NULL,
    `magassag` INTEGER NULL,
    `szelesseg` INTEGER NULL,
    `vastagsag` INTEGER NULL,
    `tomeg` INTEGER NULL,
    `szin` VARCHAR(191) NULL,
    `usb` VARCHAR(191) NULL,
    `vizallo` VARCHAR(191) NULL,
    `wifi` VARCHAR(191) NULL,
    `kamera` VARCHAR(191) NULL,
    `gpu` VARCHAR(191) NULL,
    `CPU` VARCHAR(191) NULL,

    UNIQUE INDEX `termekparams_TmkID_key`(`TmkID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `termekparams` ADD CONSTRAINT `termekparams_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
