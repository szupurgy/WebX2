/*
  Warnings:

  - You are about to drop the column `TeljesAr` on the `rendelesek` table. All the data in the column will be lost.
  - You are about to alter the column `datum` on the `rendelesek` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the `rendelttermekek` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `CimID` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SzalID` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TmkID` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fizID` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floID` to the `Rendelesek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fid` to the `SzalCimek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rendelesek` DROP COLUMN `TeljesAr`,
    ADD COLUMN `CimID` INTEGER NOT NULL,
    ADD COLUMN `SzalID` INTEGER NOT NULL,
    ADD COLUMN `TmkID` INTEGER NOT NULL,
    ADD COLUMN `fizID` INTEGER NOT NULL,
    ADD COLUMN `floID` INTEGER NOT NULL,
    MODIFY `datum` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `szalcimek` ADD COLUMN `fid` INTEGER NOT NULL;

-- DropTable
DROP TABLE `rendelttermekek`;

-- CreateTable
CREATE TABLE `Kosar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `floID` INTEGER NOT NULL,
    `TmkID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SzalCimek` ADD CONSTRAINT `SzalCimek_fid_fkey` FOREIGN KEY (`fid`) REFERENCES `Felhasznalok`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_floID_fkey` FOREIGN KEY (`floID`) REFERENCES `Felhasznalok`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_CimID_fkey` FOREIGN KEY (`CimID`) REFERENCES `SzalCimek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_fizID_fkey` FOREIGN KEY (`fizID`) REFERENCES `FizModok`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_SzalID_fkey` FOREIGN KEY (`SzalID`) REFERENCES `SzalModok`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kosar` ADD CONSTRAINT `Kosar_floID_fkey` FOREIGN KEY (`floID`) REFERENCES `Felhasznalok`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kosar` ADD CONSTRAINT `Kosar_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
