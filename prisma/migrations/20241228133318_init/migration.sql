/*
  Warnings:

  - You are about to drop the `Ninja` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Ninja`;

-- CreateTable
CREATE TABLE `Ninjas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `weapon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
