## .env
JWT_SECRET="token"
DATABASE_URL="postgresql://user:password:port/database?schema=public"

## auth
- [POST] /auth/register
- [POST] /auth/login
- [GET] [AUTHORIZED] /auth/refresh

## api

### company

- [PUT]  [AUTHORIZED] /api/company               - update company name

### product

- [GET]  [AUTHORIZED] /api/products              - return list of { products, validations } of company
- [POST] [AUTHORIZED] /api/products              - create and return new product by company
- [PUT]  [AUTHORIZED] /api/products/:product     - update label title of product
- [DEL]  [AUTHORIZED] /api/products/:product     - delete a product

### validations

- [POST] [AUTHORIZED] /api/products/:product     - create new "validations" time for product
- [PUT]  [AUTHORIZED] /api/validations/:validation - update expiration
- [DEL]  [AUTHORIZED] /api/validations/:validation - delete validation
