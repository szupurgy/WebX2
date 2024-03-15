-- CreateTable
CREATE TABLE `eleresek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TmkID` INTEGER NOT NULL,
    `kep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `eleresek` ADD CONSTRAINT `eleresek_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
