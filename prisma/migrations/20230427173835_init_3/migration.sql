/*
  Warnings:

  - Added the required column `moduleId` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Absence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absence` ADD COLUMN `moduleId` INTEGER NOT NULL,
    ADD COLUMN `sessionId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
