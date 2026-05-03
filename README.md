# LearnPro — Modern E-Learning Platform

A full-stack e-learning platform built with **React + Tailwind CSS** (frontend) and **Node.js + Express + MongoDB** (backend).

## Features

- 🔐 JWT-based authentication (student/instructor/admin roles)
- 🎬 Video course management with lessons
- 🧠 Quiz creation and submission scoring
- 📈 Learner progress tracking
- 🏅 Automatic certificate eligibility logic
- 🛠️ Admin dashboard analytics
- 🎨 Modern responsive UI with Tailwind CSS

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT + bcryptjs

## Project Structure

```
.
├── client/                 # React + Tailwind frontend
│   └── src/
├── server/                 # Express API + MongoDB models
│   └── src/
└── package.json            # Workspace scripts
```

## API Modules

- `POST /api/auth/register`, `POST /api/auth/login`
- `GET /api/courses`, `GET /api/courses/:id`, `POST /api/courses`
- `POST /api/quizzes`, `POST /api/quizzes/:id/submit`
- `GET /api/progress/me`, `POST /api/progress`
- `GET /api/admin/dashboard`

## Getting Started

### 1) Install dependencies

```bash
npm install
npm install -w client
npm install -w server
```

### 2) Configure environment

```bash
cp server/.env.example server/.env
```

Update `server/.env` with your MongoDB URI and JWT secret.

### 3) Run development servers

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Core Data Models

- **User**: name, email, password, role, enrolled courses
- **Course**: title, description, instructor, lessons, quizzes, publish status
- **Quiz**: course, title, questions/options/answers
- **Progress**: completed lessons, quiz scores, % completion, certificate status

## Roadmap Ideas

- Payment integration
- Course review/rating system
- Real certificate PDF generation
- Streaming/CDN integration
- Instructor revenue analytics

## License

MIT
