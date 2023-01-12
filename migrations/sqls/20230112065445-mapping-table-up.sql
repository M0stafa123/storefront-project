CREATE TABLE mapping(
id serial primary key,
order_id int REFERENCES orders(id),
product_id int REFERENCES products(id),
quantity int);