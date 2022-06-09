
# Application e-commerce Full-JS

it's a full javascript e-commerce web application composed with :
- Node.Js API server
- React.Js for admin panel (web interface)
- React.Native (mobile interface) for customers

## Documentation
To use this application you just need to clone this project and run:
```http
  npm install
```
  for every application (nodeJs / reactJs / react Native)


## API Reference

#### Get all users

```http
  GET  /api/users/
```
#### Get one user

```http
  GET /api/user/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `intger` | **Required** user  id |

#### Add one user

```http
  POST /api/user/add
```

#### Get all products

```http
  GET  /api/products/
```
#### Get one product

```http
  GET /api/product/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `intger` | **Required** product id |

#### Add one product

```http
  POST /api/product/add
```
#### Add one order

```http
  POST /api/order/add
```
#### get orders of inovice

```http
  POST /api/orders/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `intger` | **Required** inovice id |

#### update quantity for one order

```http
  POST /api/order/qtt/:id/:oper
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `intger` | **Required** |
| `oper` | `intger` | **Required** "0" to decrement and "1" to encryment |


## 🚀 About Me
I'm a full stack developer, my pricipal developpement language is PHP with LARAVEL Framework

## 🛠 Skills
Javascript, HTML, CSS, PHP, DOCKER, LARAVEL, Node.js, React.js, React.native

