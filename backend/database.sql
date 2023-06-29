CREATE TABLE
    os (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        version VARCHAR(254) NOT NULL
    );

CREATE TABLE
    ram (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL
    );

CREATE TABLE
    storage (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(254) NOT NULL
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
        name VARCHAR(254) NOT NULL
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
        firstname VARCHAR(50) NOT NULL,
        email VARCHAR(254) NOT NULL,
        password VARCHAR(254) NOT NULL,
        admin TINYINT NOT NULL,
        statut VARCHAR(254) NOT NULL
    );

-- Inserts

-- category

INSERT INTO
    category (name, min_value, max_value)
VALUES ('HC', NULL, NULL), ('C', 90, 164.99), ('B', 165, 254.99), ('A', 255, 374.99), ('Premium', 375, NULL);

-- state

INSERT INTO state (name)
VALUES ('DEEE'), ('Réparable'), ('Bloqué'), ('Reconditionnable'), ('Reconditionné');

-- os

INSERT INTO os (version)
VALUES ('Android 8'), ('Android 8.1'), ('Android 9'), ('Android 10'), ('Android 11'), ('Android 12'), ('Android 13'), ('iOS 12.5'), ('iOS 13.7'), ('iOS 14.8'), ('iOS 15.7'), ('iOS 16.5');

-- ram

INSERT INTO ram (name)
VALUES ('1 Go'), ('2 Go'), ('3 Go'), ('4 Go'), ('6 Go'), ('8 Go'), ('12 Go'), ('16 Go');

-- storage

INSERT INTO storage (name)
VALUES ('16 Go'), ('32 Go'), ('64 Go'), ('128 Go'), ('256 Go'), ('512 Go'), ('1 To');

-- network

INSERT INTO network (name) VALUES ('3G'),('4G'),('5G');

-- users

INSERT INTO
    users (
        firstname,
        email,
        password,
        admin,
        statut
    )
VALUES (
        'toto',
        'toto@toto.com',
        '$argon2id$v=19$m=65536,t=3,p=4$mxxTymqbnIRjE2YIO/bRjA$wzdECEb3RNPWFo2NdVCvl+EjTraYJhuNMub8YiNBMhc',
        1,
        "admin"
    );

INSERT INTO
    users (
        firstname,
        email,
        password,
        admin,
        statut
    )
VALUES (
        'tata',
        'tata@toto.com',
        '$argon2id$v=19$m=65536,t=3,p=4$mxxTymqbnIRjE2YIO/bRjA$wzdECEb3RNPWFo2NdVCvl+EjTraYJhuNMub8YiNBMhc',
        2,
        "salarié"
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
VALUES (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (2, "Galaxy 12", "6'", 2, 7), (2, "iphone 10", "6'", 3, 12), (2, "iphone 10", "6'", 3, 12), (2, "iphone 10", "6'", 3, 12), (2, "Galaxy 12", "6'", 2, 7), (1, "iphone 10", "6'", 3, 12), (1, "iphone 10", "6'", 3, 12);