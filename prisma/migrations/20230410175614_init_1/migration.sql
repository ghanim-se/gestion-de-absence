/*
  Warnings:

  - You are about to drop the column `semesterId` on the `module` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `module` DROP FOREIGN KEY `Module_semesterId_fkey`;

-- AlterTable
ALTER TABLE `module` DROP COLUMN `semesterId`;

-- CreateTable
CREATE TABLE `Module_Semester` (
    `semesterId` INTEGER NOT NULL,
    `moduleId` INTEGER NOT NULL,

    PRIMARY KEY (`semesterId`, `moduleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Module_Semester` ADD CONSTRAINT `Module_Semester_semesterId_fkey` FOREIGN KEY (`semesterId`) REFERENCES `Semester`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Module_Semester` ADD CONSTRAINT `Module_Semester_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
