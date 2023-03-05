# company-manager

## Demo URL

[https://company-app.qumber.ml](https://company-app.qumber.ml)

## Description

APIs written in NestJS with Express and Typescript

## Demo Videos

- [Setup and overview](https://www.loom.com/share/d02f72857ab148448a7cfd21385921a3)
- [Endpoints and auth](https://www.loom.com/share/b0d62e95a86542b3a15600f577c8ba1c)
- [Code overview](https://www.loom.com/share/f03e96a84fac4770af77366e6e1cf3ec)

## Prerequisites

- Node >= v18.xx
- MySQL >= 8

OR

- Docker
- Docker compose

## Installation

<details>
    <summary>Using Docker configuration</summary>

When using Docker configuration, run the following to start MySQL server,
 NestJS backend, run migrations, populate the users table and start the app:

```bash
$ docker compose up --build
```

</details>

<details>
    <summary>Manually (without Docker)</summary>

Follow the following steps to set up the project manually:

### Install dependencies

```bash
$ npm install
```

### Create .env file

```bash
$ cp .env.example .env
```

Change MySQL credentials in the `.env` file as needed.

### Run TypeORM migrations

Ensure that you have a MySQL server running and the `.env` file has its details.
Then run the following:

```bash
$ npm run migration:run
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# watch mode with debugger attached
$ npm run start:debug

# production mode
$ npm run start:prod
```

</details>


## Demo Users for Authentication

### 1. User with `READ` and `WRITE` access

    email: qumber@mail.com
    password: qumber@123

### 2. User with `READ` only access

    email: john@mail.com
    password: john@123
