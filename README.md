# Contactus Cryowerx

This project is a simple contact form application built using React, Express, and PostgreSQL. It is a simple web application that allows users to submit contact information and messages to the server. Made for take home assignment for Cryowerx.

## Prerequisites

- Node.js and npm installed on your machine.
- Docker installed for development database and production deployment.

## Installation

### Install Dependencies

To install all dependencies for both the server and client. This command will also build and run docker containers.
```bash
npm run dci
```

### Migrate Database

To run database migrations:
```bash
npm run migrate
```

## Development

### Run Server

To run the server:
```bash
npm run server
```

### Run Client

To run the client:
```bash
npm run client
```

## Production

### Start Production Environment

To start the application in a production environment using Docker:
```bash
npm run prod:up
```

### Stop Production Environment

To stop the production environment:
```bash
npm run prod:down
```

## Change .env file if needed
For this project, the .env file is pushed to the remote repository for ease of use. You can change the .env if you want to change the default values. For real project dont push the .env file.