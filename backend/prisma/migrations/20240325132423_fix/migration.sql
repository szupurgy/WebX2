-- DropForeignKey
ALTER TABLE `eleresek` DROP FOREIGN KEY `eleresek_TmkID_fkey`;

-- AddForeignKey
ALTER TABLE `eleresek` ADD CONSTRAINT `eleresek_TmkID_fkey` FOREIGN KEY (`TmkID`) REFERENCES `Termekek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
