# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products

#### Users

- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders

- Current Order by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

#### mapping

- id
- quantity
- product_id
- order_id

#### ENDPOINTS

### products

- index '/api/products' [GET]
- show '/api/products/:id' [GET]
- create '/api/products' [POST]
- delete '/api/products/:id' [DELETE]

### users

- index '/api/users' [GET]
- show '/api/users/:id' [GET]
- create '/api/users' [POST]
- delete '/api/users/:id [DELETE]

### orders

- index '/api/orders' [GET]
- show '/api/orders/:id' [GET]
- create '/api/orders' [POST]
- delete '/api/orders/:id' [DELETE]

### mapping

- join '/api/mapping' [GET]
- top5 '/api/top5' [GET]
