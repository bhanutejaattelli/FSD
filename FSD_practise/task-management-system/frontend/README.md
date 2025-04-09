# Task Management System Frontend

This is the frontend part of the Task Management System project built using React. It allows users to register, log in, and manage their tasks.

## Features

- User Registration
- User Login
- Task Management (Create, Read, Update, Delete)
- JWT Authentication

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:

   ```
   cd task-management-system/frontend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

1. Start the development server:

   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`.

### Folder Structure

```
frontend
├── public
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── src
│   ├── components
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── TaskList.js
│   ├── App.js
│   └── index.js
└── package.json
```

### API Endpoints

The frontend communicates with the backend API. Here are the key endpoints:

- **Authentication**
  - POST `/api/auth/register` - Register a new user
  - POST `/api/auth/login` - Log in an existing user

- **Tasks**
  - POST `/api/tasks` - Create a new task
  - GET `/api/tasks` - Retrieve all tasks
  - GET `/api/tasks/:id` - Retrieve a specific task
  - PUT `/api/tasks/:id` - Update a specific task
  - DELETE `/api/tasks/:id` - Delete a specific task

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.