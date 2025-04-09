# Task Management System

## Overview
This project is a Task Management System built using Node.js, Express, and MongoDB with Mongoose for the backend, and React for the frontend. It includes user registration, task management, and JWT authentication.

## Features
- User registration and login
- JWT authentication for secure access
- CRUD operations for tasks
- User-specific task management

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- React

## Backend Setup

### Prerequisites
- Node.js installed
- MongoDB instance running

### Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the backend directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```
   npm start
   ```

## Frontend Setup

### Prerequisites
- Node.js installed

### Installation
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user

### Task Management
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Retrieve all tasks for the authenticated user
- `GET /api/tasks/:id` - Retrieve a specific task by ID
- `PUT /api/tasks/:id` - Update a specific task by ID
- `DELETE /api/tasks/:id` - Delete a specific task by ID

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.