-- CreateTable
CREATE TABLE `News` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `link_berita` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `created_by` VARCHAR(191) NOT NULL,
    `news_type` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
