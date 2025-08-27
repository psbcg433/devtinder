# 🚀 DevTinder

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)


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

## �️ API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:------------:|
| **POST** | `/api/v1/auth/register` | Register a new user | ❌ |
| **POST** | `/api/v1/auth/login` | Login and receive JWT token | ❌ |
| **POST** | `/api/v1/auth/logout` | Logout user | ✅ |
| **GET** | `/api/v1/profile/getProfile` | Get user profile | ✅ |
| **PATCH** | `/api/v1/profile/setProfile` | Update user profile | ✅ |
| **PATCH** | `/api/v1/profile/setPassword` | Change password | ✅ |
| **DELETE** | `/api/v1/profile/deleteProfile` | Delete user profile | ✅ |
| **POST** | `/api/v1/request/send/:status/:toUserId` | Send a connection request (`status`: interested/ignored) | ✅ |
| **POST** | `/api/v1/request/review/:status/:requestId` | Review a connection request (`status`: accepted/rejected) | ✅ |
| **GET** | `/api/v1/user/getRequest` | Get pending connection requests | ✅ |
| **GET** | `/api/v1/user/getConnections` | Get accepted connections | ✅ |
| **GET** | `/api/v1/user/getFeed` | Get user feed (suggested users) | ✅ |

---

## 🎨 Technologies Used
<p align="center">
   <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/bcrypt-00599C?logo=github&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/validator-FF9900?logo=javascript&logoColor=white&style=for-the-badge" />
   <img src="https://img.shields.io/badge/cookie--parser-4B8BBE?logo=javascript&logoColor=white&style=for-the-badge" />
</p>

---

## 📝 Example .env
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017
DB_NAME=devtinder
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

---

## 💡 Tips
- All endpoints requiring authentication expect a valid JWT token in cookies.
- Use tools like Postman or Insomnia for API testing.
- Modular structure makes it easy to extend features.

---

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


