# 🏠 RealNest

### Full Stack Real Estate Management & Marketplace Platform

<p align="center">
  A modern, scalable and production-oriented real estate platform built with a clean architecture approach.
</p>

## 📌 Overview

**RealNest** is a full-stack real estate platform designed to simulate a real-world production application.

The platform allows users to create, manage and explore property listings through a modern, responsive and scalable architecture.

Users can:

* 🔐 Create an account and securely authenticate
* 🏡 Publish new property listings
* 📸 Upload property images
* ✏️ Edit and manage their own properties
* 🗑️ Delete their listings
* 🔎 Search properties using filters
* 📄 View detailed information about each property

The main goal of this project is not only implementing features, but also applying professional software engineering principles such as:

* Clean Architecture
* Separation of Concerns
* Modular Design
* Type Safety
* Scalable Project Structure
* Maintainable Codebase

---

# 🚀 Features

## Authentication

* User registration
* User login
* JWT authentication
* Access Token + Refresh Token strategy
* HTTP-only cookie based refresh token
* Protected routes
* Persistent user session

## Property Management

Users can:

* Create properties
* Upload property images
* View all properties
* View property details
* Manage their own properties
* Update existing properties
* Delete properties

## Search & Filtering

Properties can be filtered by:

* City
* Price range
* Sorting options

## User Dashboard

Personal dashboard for users:

* View owned properties
* Edit listings
* Delete listings

---

# 🏗️ Tech Stack

## Frontend

| Technology           | Purpose                 |
| -------------------- | ----------------------- |
| Next.js 16           | React Framework         |
| React 19             | UI Development          |
| TypeScript           | Type Safety             |
| Tailwind CSS v4      | Styling                 |
| shadcn/ui            | UI Components           |
| React Hook Form      | Form Management         |
| Zod                  | Schema Validation       |
| TanStack React Query | Server State Management |
| Zustand              | Client State Management |
| Axios                | API Communication       |
| Framer Motion        | Animations              |

---

## Backend

| Technology | Purpose              |
| ---------- | -------------------- |
| Node.js    | Runtime Environment  |
| Express.js | Backend Framework    |
| TypeScript | Type Safety          |
| Prisma ORM | Database Management  |
| PostgreSQL | Database             |
| JWT        | Authentication       |
| Multer     | File Upload Handling |
| Cloudinary | Image Storage        |
| bcrypt     | Password Hashing     |

---

# 🧩 Architecture

The project follows a modular architecture approach.

Each feature is separated into independent modules with clear responsibilities.

Example:

```
features/
│
├── auth/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── schemas/
│
└── property/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── schemas/
```

This structure improves:

* Maintainability
* Scalability
* Code readability
* Team collaboration

---

# 🔐 Authentication Flow

RealNest uses a secure token-based authentication system.

Flow:

```
User Login

      ↓

Backend Validation

      ↓

Generate Access Token

      ↓

Generate Refresh Token

      ↓

Refresh Token Stored in HTTP Only Cookie

      ↓

Access Token Used For Protected Requests
```

---

# 📂 Backend Structure

```
src/
│
├── controllers/
├── routes/
├── middlewares/
├── config/
├── utils/
├── prisma/
│
└── app.ts
```

Responsibilities are separated:

* Controllers → Business logic
* Routes → API endpoints
* Middleware → Authentication & request handling
* Utils → Reusable utilities
* Prisma → Database layer

---

# 📂 Frontend Structure

```
src/
│
├── app/
├── components/
├── features/
├── hooks/
├── services/
├── store/
├── schema/
├── types/
└── lib/
```

The frontend follows a feature-based architecture instead of a simple component-based structure.

---

# 🛠️ Development Principles

During development, the following principles were considered:

- ✅ Clean Code
- ✅ Separation of Responsibilities
- ✅ Reusable Components
- ✅ Strong Type Safety
- ✅ Validation Before API Requests
- ✅ API Layer Separation
- ✅ Modular Feature Development
- ✅ Scalable Folder Structure

---

# 📸 Image Management

Property images are uploaded using:

```
Frontend

↓

Multer

↓

Backend Processing

↓

Cloudinary Storage

↓

Database stores image URL
```

This approach keeps the application scalable and avoids storing large files directly inside the database.

---

# 🗄️ Database Design

Main entities:

## User

```
User
 |
 |---- id
 |---- firstName
 |---- lastName
 |---- email
 |---- password
 |
 └── properties[]
```

## Property

```
Property
 |
 |---- title
 |---- description
 |---- price
 |---- city
 |---- address
 |---- area
 |---- bedrooms
 |---- bathrooms
 |---- imageUrl
 |
 └── owner
```

---

## 🔐 Environment Variables

Before running the project, create a `.env` file in both the `server` and `client/my-app` directories.

You can use the provided `.env.example` files as templates.

### macOS / Linux

```bash
cp server/.example.env server/.env
cp client/my-app/.example.env client/my-app/.env
```

### Windows (CMD)

```cmd
copy server\.example.env server\.env
copy client\my-app\.example.env client\my-app\.env
```
---

# 🎯 Project Goal

RealNest was developed as a professional full-stack application to demonstrate practical knowledge of modern web development, scalable architecture, backend API design, authentication systems and production-level frontend engineering.

---

# 👨‍💻 Author

Developed by **Mahdi**

Computer Engineering Student
Full Stack Developer

---

⭐ If you find this project interesting, feel free to explore the code and follow the development journey.
