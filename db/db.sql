CREATE DATABASE `web_roaya_visitor`;
USE `web_roaya_visitor`;

CREATE TABLE `visitor`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`),
    `name` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `subject` varchar(255) NOT NULL,
    `message` varchar(255) NOT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `where_from` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `register`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`),
    `email` varchar(255) NOT NULL,
    `pass` varchar(255) NOT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `where_from` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
