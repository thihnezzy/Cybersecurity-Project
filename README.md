# Cybersecurity-Project - MERN Stack App

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) by four engineering students. Our goal is to build a website and use pentesting and auto-script to attack it.

## Running the app locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Client-side

1. Navigate to the `client` directory:
    ```
    cd client
    ```
2. Install the dependencies:
```
npm install -f
```
3. Start the client:
```
npm start
```
The client should now be running at [http://localhost:3000](http://localhost:3000).

### Server-side

1. Navigate to the `server` directory:
```
cd server
```
2. Install the dependencies:
```
npm install
```
3. Start the server:
```
npm start
```
The server should now be running at [http://172.30.150.102/api](http://172.30.150.102/api).

## API Endpoints

- `GET /products`: Retrieves a list of products 
- `GET /products/:id`: Retrieves detailed product
- `GET /cart`: Retrieves list of products in cart
- `GET /login`: Login page
- `GET /product`: Registration Page
...
