/*
  Warnings:

  - Added the required column `user_email` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `user_email` VARCHAR(191) NOT NULL;
