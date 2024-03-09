/*
  Warnings:

  - A unique constraint covering the columns `[fid]` on the table `SzalCimek` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SzalCimek_fid_key` ON `SzalCimek`(`fid`);
