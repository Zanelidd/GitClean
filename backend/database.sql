-- Active: 1686231917905@@127.0.0.1@3306@hackathon2

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
    `brand` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `product` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `brand_id` INT NOT NULL, 
        `model` VARCHAR(254) NOT NULL,
        `network_id` int NOT NULL,
        `os_id` INT NOT NULL,
        FOREIGN KEY(`brand_id`) REFERENCES `brand`(id),
        FOREIGN KEY(`network_id`) REFERENCES `network`(id),
        FOREIGN KEY(`os_id`) REFERENCES `os`(id)
    );

CREATE TABLE
    `product_storage` (
        `product_id` INT NOT NULL,
        `storage_id` INT NOT NULL,
        PRIMARY KEY (`product_id`, `storage_id`),
        FOREIGN KEY(`product_id`) REFERENCES `product` (id),
        FOREIGN KEY(`storage_id`) REFERENCES `storage` (id)
    );

CREATE TABLE
    `product_ram` (
        `product_id` INT NOT NULL,
        `ram_id` INT NOT NULL,
        PRIMARY KEY (`product_id`, `ram_id`),
        FOREIGN KEY(`product_id`) REFERENCES `product` (id),
        FOREIGN KEY(`ram_id`) REFERENCES `ram` (id)
    );

CREATE TABLE
    `state` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL
    );

CREATE TABLE
    `category` (
        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(254) NOT NULL,
        `min_value` FLOAT(2) NULL,
        `max_value` FLOAT(2) NULL        
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

INSERT INTO category (name, min_value, max_value)
VALUES ('HC',null,null), ('C',90,164.99), ('B',165,254.99), ('A',255,374.99), ('Premium',375,null);

INSERT INTO state (name)
VALUES ('DEEE'), ('REPARABLE'), ('BLOQUE'), ('RECONDITIONABLE'), ('RECONDITIONNE');

INSERT INTO os (version) VALUES ('Android-v13'),('IOS-v16.5.1');

INSERT INTO ram (name)
VALUES ('1'), ('2'), ('3'), ('4'), ('6'), ('8'), ('12'), ('16');

INSERT INTO storage (name)
VALUES ('16'), ('32'), ('64'), ('128'), ('256'), ('512'), ('1000');

INSERT INTO network (name) VALUES ('3G'),('4G'),('5G');