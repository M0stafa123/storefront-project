CREATE TABLE orders(id serial primary key,status boolean ,user_id   int REFERENCES users(id),product_id  int REFERENCES products(id),quantity integer);
