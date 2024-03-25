-- DropForeignKey
ALTER TABLE `rendelesek` DROP FOREIGN KEY `Rendelesek_CimID_fkey`;

-- DropForeignKey
ALTER TABLE `rendelesek` DROP FOREIGN KEY `Rendelesek_TmkID_fkey`;

-- DropForeignKey
ALTER TABLE `rendelesek` DROP FOREIGN KEY `Rendelesek_floID_fkey`;

-- DropForeignKey
ALTER TABLE `szalcimek` DROP FOREIGN KEY `SzalCimek_fid_fkey`;

-- DropForeignKey
ALTER TABLE `termekparams` DROP FOREIGN KEY `termekparams_TmkID_fkey`;

-- AddForeignKey
ALTER TABLE `SzalCimek` ADD CONSTRAINT `SzalCimek_fid_fkey` FOREIGN KEY (`fid`) REFERENCES `Felhasznalok`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_floID_fkey` FOREIGN KEY (`floID`) REFERENCES `Felhasznalok`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rendelesek` ADD CONSTRAINT `Rendelesek_CimID_fkey` FOREIGN KEY (`CimID`) REFERENCES `SzalCimek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `termekparams` ADD CONSTRAINT `termekparams_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
