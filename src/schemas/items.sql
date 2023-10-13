DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id int PRIMARY KEY,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    price int NOT NULL,
    discountPercentage decimal(4,2) NOT NULL,
    rating decimal(3,2) NOT NULL,
    stock int NOT NULL,
    brand varchar(255)  NOT NULL,
    category varchar(255)  NOT NULL,
    thumbnail varchar(255) NOT NULL,
    images TEXT NOT NULL
);