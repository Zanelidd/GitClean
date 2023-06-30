-- Active: 1682397207093@@127.0.0.1@3306@hackaton_2

CREATE TABLE
    os (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        version VARCHAR(254) NOT NULL
    );

CREATE TABLE
    ram (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL,
        valM INT NOT NULL
    );

CREATE TABLE
    storage (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL,
        valS INT NOT NULL
    );

CREATE TABLE
    network (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL
    );

CREATE TABLE
    brand (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL
    );

CREATE TABLE
    product (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        brand_id INT NOT NULL,
        model VARCHAR(254) NOT NULL,
        screen_size VARCHAR(254) NOT NULL,
        network_id INT NOT NULL,
        os_id INT NOT NULL,
        FOREIGN KEY(brand_id) REFERENCES brand(id),
        FOREIGN KEY(network_id) REFERENCES network(id),
        FOREIGN KEY(os_id) REFERENCES os(id)
    );

CREATE TABLE
    product_storage (
        product_id INT NOT NULL,
        storage_id INT NOT NULL,
        PRIMARY KEY (product_id, storage_id),
        FOREIGN KEY(product_id) REFERENCES product(id),
        FOREIGN KEY(storage_id) REFERENCES storage(id)
    );

CREATE TABLE
    product_ram (
        product_id INT NOT NULL,
        ram_id INT NOT NULL,
        PRIMARY KEY (product_id, ram_id),
        FOREIGN KEY(product_id) REFERENCES product(id),
        FOREIGN KEY(ram_id) REFERENCES ram(id)
    );

CREATE TABLE
    state (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL,
        weighting FLOAT NOT NULL
    );

CREATE TABLE
    category (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL,
        min_value FLOAT(2) NULL,
        max_value FLOAT(2) NULL
    );

CREATE TABLE
    users (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(254) NOT NULL,
        password VARCHAR(254) NOT NULL,
        admin TINYINT NOT NULL
    );

-- Inserts

-- category

INSERT INTO
    category (name, min_value, max_value)
VALUES ('HC', 0, 89), ('C', 90, 164.99), ('B', 165, 254.99), ('A', 255, 374.99), ('Premium', 375, NULL);

-- state

INSERT INTO
    state (name, weighting)
VALUES ('DEEE', 0), ('Réparable', 0.5), ('Bloqué', 0.9), ('Reconditionnable', 0.95), ('Reconditionné', 1), ('Bon état', 1.05), ('Neuf', 1.1);

-- os

INSERT INTO os (version)
VALUES ('Android 8'), ('Android 8.1'), ('Android 9'), ('Android 10'), ('Android 11'), ('Android 12'), ('Android 13'), ('iOS 12.5'), ('iOS 13.7'), ('iOS 14.8'), ('iOS 15.7'), ('iOS 16.5');

-- ram

INSERT INTO ram (name, valM)
VALUES ('1 Go', 30), ('2 Go', 40), ('3 Go', 54), ('4 Go', 60), ('6 Go', 70), ('8 Go', 80), ('12 Go', 90), ('16 Go', 100);

-- storage

INSERT INTO
    storage (name, valS)
VALUES ('16 Go', 30), ('32 Go', 45), ('64 Go', 65), ('128 Go', 75), ('256 Go', 85), ('512 Go', 95), ('1 To', 120);

-- network

INSERT INTO network (name) VALUES ('3G'),('4G'),('5G');

-- users

INSERT INTO
    users (
        firstname,
        lastname,
        email,
        password,
        admin
    )
VALUES (
        'toto',
        'toto',
        'toto@toto.com',
        '$argon2id$v=19$m=65536,t=3,p=4$mxxTymqbnIRjE2YIO/bRjA$wzdECEb3RNPWFo2NdVCvl+EjTraYJhuNMub8YiNBMhc',
        1
    );

INSERT INTO
    users (
        firstname,
        lastname,
        email,
        password,
        admin
    )
VALUES (
        'tata',
        'tata',
        'tata@toto.com',
        '$argon2id$v=19$m=65536,t=3,p=4$mxxTymqbnIRjE2YIO/bRjA$wzdECEb3RNPWFo2NdVCvl+EjTraYJhuNMub8YiNBMhc',
        2
    );

-- brand

INSERT INTO brand (name) VALUES ('Apple'), ('Samsung');

INSERT INTO
    product (
        brand_id,
        model,
        screen_size,
        network_id,
        os_id
    )
VALUES (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "7'", 3, 12), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (1, "iphone 10", "11'", 3, 12), (2, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (1, "iphone 10", "5'", 3, 12), (2, "Galaxy 12", "2'", 2, 7), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "4'", 2, 7), (2, "iphone 10", "8'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12);

INSERT INTO
    product_ram (product_id, ram_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 1), (9, 2), (10, 3), (11, 4), (12, 5), (13, 6), (14, 7), (15, 1), (16, 2), (17, 3), (18, 4), (19, 5), (20, 6);

INSERT INTO
    product_storage (product_id, storage_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 1), (9, 2), (10, 3), (11, 4), (12, 5), (13, 6), (14, 7), (15, 1), (16, 2), (17, 3), (18, 4), (19, 5), (20, 6);