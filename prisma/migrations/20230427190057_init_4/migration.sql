/*
  Warnings:

  - Added the required column `createdAt` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectorId` to the `Absence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absence` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `sectorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_sectorId_fkey` FOREIGN KEY (`sectorId`) REFERENCES `Sector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
