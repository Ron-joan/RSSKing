/*
  Warnings:

  - You are about to drop the `user_subscription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user_subscription`;

-- CreateTable
CREATE TABLE `UserSubscription` (
    `userID` BIGINT NOT NULL,
    `resourceID` BIGINT NOT NULL,
    `ID` INTEGER NOT NULL,

    INDEX `userID`(`userID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
