CREATE TABLE orders(id serial primary key,status boolean ,user_id int,product_id int,quantity integer);
alter table orders add constraint fk_users_pkey FOREIGN KEY(user_id) REFERENCES  users(id);
alter table orders add constraint fk_products_pkey FOREIGN KEY(product_id) REFERENCES  products(id);