# Project with Nest JS, MySQL and Docker

## Environments

**Port for docker MySQL**
_MYSQL_PORT=_
**Password for database vencejos**
_MYSQL_PASSWORD=_
**Port for docker nestjs**
_NEST_PORT=_
**URL for connection to database**
_DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"_

## Execute migrations

```
> $ npx prisma migrate dev --name init
```

**Execute migration by name**

```
> $ npx prisma migrate dev
```

**Then insert the name of the migration**

**Run the following command after making a change to the model**
```
> $ prisma generate
```
