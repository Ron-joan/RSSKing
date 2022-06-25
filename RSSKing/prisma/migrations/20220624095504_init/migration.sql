/*
  Warnings:

  - The primary key for the `PushMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `resourceID` to the `PushMessage` table without a default value. This is not possible if the table is not empty.
  - Made the column `inductionID` on table `PushMessage` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `usertype` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PushMessage` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `resourceID` BIGINT NOT NULL,
    MODIFY `inductionID` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` ADD COLUMN `usertype` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserSubscription` MODIFY `ID` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateIndex
CREATE INDEX `inductionID` ON `PushMessage`(`inductionID`);

-- CreateIndex
CREATE INDEX `resourceID` ON `PushMessage`(`resourceID`);

-- CreateIndex
CREATE INDEX `userID` ON `PushMessage`(`userID`, `resourceID`);

-- AddForeignKey
ALTER TABLE `Induction` ADD CONSTRAINT `Induction_ibfk_1` FOREIGN KEY (`resourceID`) REFERENCES `Resource`(`resourceID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserAuth` ADD CONSTRAINT `UserAuth_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `User`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserSubscription` ADD CONSTRAINT `UserSubscription_ibfk_2` FOREIGN KEY (`resourceID`) REFERENCES `Resource`(`resourceID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserSubscription` ADD CONSTRAINT `UserSubscription_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `User`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PushMessage` ADD CONSTRAINT `PushMessage_ibfk_2` FOREIGN KEY (`inductionID`) REFERENCES `Induction`(`inductionID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PushMessage` ADD CONSTRAINT `PushMessage_ibfk_3` FOREIGN KEY (`resourceID`) REFERENCES `Resource`(`resourceID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `PushMessage` ADD CONSTRAINT `PushMessage_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `User`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
