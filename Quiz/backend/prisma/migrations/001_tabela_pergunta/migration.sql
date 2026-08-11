-- Active: 1757686924296@@127.0.0.1@3306@quizgamejam
-- CreateTable
CREATE TABLE `Pergunta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pergunta` VARCHAR(500) NOT NULL,
    `materia` VARCHAR(50) NOT NULL,
    `alternativaA` VARCHAR(300) NOT NULL,
    `alternativaB` VARCHAR(300) NOT NULL,
    `alternativaC` VARCHAR(300) NOT NULL,
    `alternativaD` VARCHAR(300) NOT NULL,
    `explicacao` VARCHAR(1000) NOT NULL,
    `resposta` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
