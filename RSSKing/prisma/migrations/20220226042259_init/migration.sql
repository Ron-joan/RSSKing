/*
  Warnings:

  - The primary key for the `Induction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Induction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `resourceID` ON `Induction`;

-- AlterTable
ALTER TABLE `Induction` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `inductionID` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `description` MEDIUMTEXT NOT NULL,
    ADD PRIMARY KEY (`inductionID`);

-- CreateTable
CREATE TABLE `PushMessage` (
    `userID` BIGINT NOT NULL,
    `inductionID` BIGINT NULL,

    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `resourceID` ON `Induction`(`resourceID`, `createtime`);

-- CreateIndex
CREATE INDEX `resourceID` ON `UserSubscription`(`resourceID`);
