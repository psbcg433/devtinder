# DevTinder

DevTinder is a Node.js and Express-based web application for user registration, authentication, profile management, and connection requests. It uses MongoDB for data storage and Mongoose for schema modeling. The project is modular, with clear separation of concerns for routes, controllers, models, and utilities.

## Features
- User registration and login with JWT authentication
- Secure password hashing using bcrypt
- Profile management (view, update, change password, delete)
- Send connection requests between users
- Validation for email and strong passwords
- Cookie-based session management
- Modular code structure for scalability

## Project Structure
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

## Setup Instructions
1. Clone the repository and navigate to the project folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=devtinder
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1d
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### Auth
- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT token
- `POST /api/v1/auth/logout` — Logout user (requires authentication)

### Profile
- `GET /api/v1/profile/getProfile` — Get user profile (requires authentication)
- `PATCH /api/v1/profile/setProfile` — Update user profile (requires authentication)
- `PATCH /api/v1/profile/setPassword` — Change password (requires authentication)
- `DELETE /api/v1/profile/deleteProfile` — Delete user profile (requires authentication)

### Request
- `POST /api/v1/request/sendConnectionRequest` — Send a connection request (requires authentication)

### Miscellaneous
- `GET /user?email=...` — Fetch user by email
- `GET /feed` — Get all users

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt (password hashing)
- validator (input validation)
- jsonwebtoken (JWT)
- cookie-parser

