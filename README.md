# Simple Auth

A **User Authentication System** built with **Node.js, Express, MongoDB, Mongoose, bcrypt, and JWT**.  
This project was developed as a practice task to implement **user registration, login, profile management, and secure authentication**.

---

## 🚀 Features
- 📝 User registration with first name, last name, email, and password
- 🔑 User login with JWT-based authentication
- 🛡️ Password hashing with bcrypt
- 🍪 Session management with cookies
- 👤 View and edit user profile
- 🚪 Logout functionality
- ✅ Input validation with express-validator

---

## 🛠️ Technologies Used
- [Node.js](https://nodejs.org/) – Runtime environment
- [Express.js](https://expressjs.com/) – Web framework
- [MongoDB](https://www.mongodb.com/) – Database
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js/) – Password hashing
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) – JWT authentication
- [cookie-parser](https://github.com/expressjs/cookie-parser) – Cookie management
- [express-validator](https://express-validator.github.io/) – Input validation
- [dotenv](https://github.com/motdotla/dotenv) – Environment variables

---

## 📂 Project Structure

```text
simple-auth/
│── server.js
│── .env
│── package.json
│── config/
│   └── db.js
│── models/
│   └── User.js
│   └── Blog.js
│── routes/
│   └── auth.js
│   └── blog.js
│── controllers/
│   └── auth.js
│   └── blog.js
│── middleware/
│   └── auth.js
│── validation/
│   └── auth.js
│   └── blog.js
│── utils/
│   └── ...
