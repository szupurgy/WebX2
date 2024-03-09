/*
  Warnings:

  - You are about to drop the `kosar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `kosar` DROP FOREIGN KEY `Kosar_TmkID_fkey`;

-- DropForeignKey
ALTER TABLE `kosar` DROP FOREIGN KEY `Kosar_floID_fkey`;

-- DropTable
DROP TABLE `kosar`;
