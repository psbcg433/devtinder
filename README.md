# 🚀 DevTinder

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> **DevTinder** is a modern Node.js & Express web application for user registration, authentication, profile management, and connection requests. Built with MongoDB, Mongoose, and a modular architecture for scalability and maintainability.

---

## ✨ Features
- 🔒 Secure user registration & login (JWT authentication)
- 🛡️ Password hashing with bcrypt
- 👤 Profile management (view, update, change password, delete)
- 🤝 Send connection requests
- 📧 Email & password validation
- 🍪 Cookie-based session management
- 🗂️ Modular code structure

---

## 📁 Project Structure
```
├── app.js
├── server.js
├── config/
│   └── conn.js
├── middlewares/
│   └── auth.js
├── models/
│   └── user.model.js
├── routes/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   └── auth.route.js
│   ├── profile/
│   │   ├── profile.controller.js
│   │   └── profile.route.js
│   └── request/
│       ├── request.controller.js
│       └── request.route.js
├── utils/
│   └── helper.js
└── README.md
```

---

## ⚡️ Quick Start
1. **Clone the repository:**
   ```sh
   git clone https://github.com/psbcg433/devtinder.git
   cd devtinder
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:**
   Create a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=devtinder
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1d
   ```
4. **Start the server:**
   ```sh
   npm start
   ```

---

## 📚 API Endpoints
### 🛡️ Auth
- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT token
- `POST /api/v1/auth/logout` — Logout user (requires authentication)

### 👤 Profile
- `GET /api/v1/profile/getProfile` — Get user profile (requires authentication)
- `PATCH /api/v1/profile/setProfile` — Update user profile (requires authentication)
- `PATCH /api/v1/profile/setPassword` — Change password (requires authentication)
- `DELETE /api/v1/profile/deleteProfile` — Delete user profile (requires authentication)

### 🤝 Request
- `POST /api/v1/request/sendConnectionRequest` — Send a connection request (requires authentication)

### 📦 Miscellaneous
- `GET /user?email=...` — Fetch user by email
- `GET /feed` — Get all users

---

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **bcrypt** (password hashing)
- **validator** (input validation)
- **jsonwebtoken** (JWT)
- **cookie-parser**

---


