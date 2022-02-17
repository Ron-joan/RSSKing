-- CreateTable
CREATE TABLE `Induction` (
    `resourceID` BIGINT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createtime` DATETIME(6) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `resourceID`(`resourceID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resource` (
    `resourceID` BIGINT NOT NULL,
    `resourceType` TINYINT NOT NULL,
    `resourcePath` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`resourceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `ID` BIGINT NOT NULL,
    `nickName` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAuth` (
    `userID` BIGINT NOT NULL,
    `identityType` TINYINT NOT NULL,
    `identifier` VARCHAR(255) NOT NULL,
    `credential` VARCHAR(255) NOT NULL,
    `ID` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `userID`(`userID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_subscription` (
    `userID` BIGINT NOT NULL,
    `resourceID` BIGINT NOT NULL,
    `ID` INTEGER NOT NULL,

    INDEX `userID`(`userID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
