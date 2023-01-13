http://localhost:3000

server running at port 3000
database running on 5432
dev ==> project
test==>project_test

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=project  
POSTGRES_TEST_DB=project_test
POSTGRES_USER=mostafa
POSTGRES_PASSWORD=postgres
NODE_ENV=dev
BCRYPT_PASSWORD=my-secret
SALT_ROUNDS=5
TOKEN_SECRET=SWEETHOME123

if (NODE_ENV == 'test') {
client = new Pool({
host: POSTGRES_HOST,
database: POSTGRES_TEST_DB,
user: POSTGRES_USER,
password: POSTGRES_PASSWORD
});
}

if (NODE_ENV == 'dev') {
client = new Pool({
host: POSTGRES_HOST,
database: POSTGRES_DB,
user: POSTGRES_USER,
password: POSTGRES_PASSWORD
});
}
