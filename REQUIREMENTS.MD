## API Endpoints

#### Products

- Index
- Show
- Create

#### Users

- Index
- Show
- Create N

#### Orders

- Current Order by user (args: user id)

## Data Shapes

#### Product

- id
- name
- price

#### User

- id
- username
- password

#### Orders

- id
- product_id
- quantity
- user_id
- status

Product
index route: '/products' [GET]
Show route: '/products/:id [GET]
Create route: '/products': [POST]

Users
Index route: '/users' [GET]
Show route: '/users/:id' [GET]
Create route: '/users' [POST]

Orders
orders : '/orders/:id' [GET]
create order :'/orders' [POST]
