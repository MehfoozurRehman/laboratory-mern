# Medical Diagnostic & Pathology Laboratory Management System (MERN)

A full-stack clinical laboratory information management system (LIMS), patient specimen tracking portal, and diagnostic test reporting suite built with MongoDB, Express, React 17, Node.js, and React-Bootstrap.

## Overview

`laboratory-mern` manages diagnostic test workflows:
- **Backend API (`/backend`)**: Express REST endpoints with Mongoose ORM, bcrypt password security, and CORS middleware.
- **Frontend Dashboard (`/frontend`)**: Patient registration, lab report generator, test inventory matrix, and role-based test approvals styled via MDBReact and Bootstrap 4.

## Tech Stack

- **Backend**: Node.js & Express (v4), MongoDB & Mongoose (v6), Bcrypt, Dotenv
- **Frontend**: React 17, React Router DOM v5, MDBReact (`mdbreact`), React-Bootstrap 4
- **Styling**: SCSS / SASS, Bootstrap

## Prerequisites

- Node.js (v16 or v18 recommended)
- MongoDB instance (local or MongoDB Atlas)
- Package manager (`npm` or `pnpm`)

## Getting Started

### 1. Start Backend API

1. Navigate to `/backend` and install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Configure `.env` in `/backend`:
   ```env
   PORT=5000
   MONGO_URI="your-mongodb-connection-string"
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### 2. Start Frontend Web Client

1. In a new terminal, navigate to `/frontend` and install dependencies:
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   ```

2. Run the development server:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000` in your web browser.

## Available Scripts

### Backend (`/backend`)
- `npm run dev` - Starts the backend server with live reload via `nodemon`.
- `npm start` - Runs the production Node.js server.

### Frontend (`/frontend`)
- `npm start` - Starts the React development server.
- `npm run build` - Compiles production assets.
- `npm test` - Runs unit test suites.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
