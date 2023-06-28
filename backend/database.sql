CREATE TABLE
    `category` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `os` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `version` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `ram` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `storage` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `network` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `model` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL,
        `model_storage_id` INT NOT NULL,
        `model_ram_id` INT NOT NULL,
        `network_id` INT NOT NULL,
        `os_id` INT NOT NULL,
        FOREIGN KEY(`os_id`) REFERENCES `os` (id),
        FOREIGN KEY(`network_id`) REFERENCES `network` (id)
    );

CREATE TABLE
    `model_storage` (
        `model_id` INT NOT NULL,
        `storage_id` INT  NOT NULL,
        PRIMARY KEY (`model_id`,`storage_id`),
        FOREIGN KEY(`model_id`) REFERENCES `model` (id),
        FOREIGN KEY(`storage_id`) REFERENCES `storage` (id)
    );

CREATE TABLE
    `model_ram` (
        `model_id` INT  NOT NULL,
        `ram_id` INT  NOT NULL,
        PRIMARY KEY (`model_id`,`ram_id`),
        FOREIGN KEY(`model_id`) REFERENCES `model` (id),
        FOREIGN KEY(`ram_id`) REFERENCES `ram` (id)
    );

CREATE TABLE
    `state` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `product` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `imei` VARCHAR(254) NOT NULL,
        `model_id` int NOT NULL,
        `category_id` int NOT NULL,
        `state` int NOT NULL,
        `storage` int NOT NULL,
        `ram_id` int NOT NULL,
        `network_id` int NOT NULL,
        FOREIGN KEY(`model_id`) REFERENCES `model`(id),
        FOREIGN KEY(`category_id`) REFERENCES `category`(id),
        FOREIGN KEY(`ram_id`) REFERENCES `ram`(id),
        FOREIGN KEY(`network_id`) REFERENCES `network`(id),
        FOREIGN KEY(`state`) REFERENCES `state`(id)
    );

CREATE TABLE
    `users` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(254) NOT NULL,
        `password` VARCHAR(254) NOT NULL,
        `firstname` VARCHAR(254) NOT NULL,
        `lastname` VARCHAR(254) NOT NULL,
        `photo` VARCHAR(254) NOT NULL,
        `admin` tinyint NOT NULL,
        `statut` VARCHAR(254) NOT NULL
    );