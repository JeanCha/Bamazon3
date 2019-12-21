DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);  

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Faith", "Music", "9.99", "2");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("VCR", "Electronics", "29.99", "25");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Purple Rain", "Movies", "19.99", "20");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Avengers", "Movies", "19.99", "2");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Princess Bride", "Movies", "59.99", "4");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hotel for Dogs", "Movies", "4.99", "6");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Color Purple", "Movies", "14.99", "6");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Star Wars", "Movies", "19.99", "6");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Good Night Opus", "Books", "54.99", "1");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Batman Lego", "Toys", "104.99", "7")

SELECT * FROM products;