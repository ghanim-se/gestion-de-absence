/*
  Warnings:

  - The primary key for the `absence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status` on the `absence` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `absence` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `absence` DROP FOREIGN KEY `Absence_studentId_fkey`;

-- AlterTable
ALTER TABLE `absence` DROP PRIMARY KEY,
    DROP COLUMN `status`,
    DROP COLUMN `studentId`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Absence_Student` (
    `absenceId` INTEGER NOT NULL,
    `studentId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`absenceId`, `studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Absence_Student` ADD CONSTRAINT `Absence_Student_absenceId_fkey` FOREIGN KEY (`absenceId`) REFERENCES `Absence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence_Student` ADD CONSTRAINT `Absence_Student_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
