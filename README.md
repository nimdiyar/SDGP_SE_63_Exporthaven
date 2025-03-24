# Exporter-Manufacturer Connecting Platform

A **MERN Stack Web Application** designed to connect **Exporters** and **Manufacturers** in **Sri Lanka**, allowing seamless **advertisement posting, chat communication, order management, and business networking**.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Common Issues & Debugging](#common-issues--debugging)
- [License](#license)

---

## Project Overview

This platform is designed to **facilitate trade** between **Exporters** and **Manufacturers** by providing:

- A **Product Marketplace** where Manufacturers can showcase their products.
- An **Exporter Advertisement System** where Exporters can post business opportunities.
- **Real-time Chat & Order Management** to ensure smooth transactions.
- **Profile Management & Rating System** to establish credibility.

---

## Key Features

✅ **User Registration & Authentication**

- Exporters & Manufacturers have **separate registration forms**.
- Secure **JWT-based authentication**.
- Password reset functionality via **email verification** (Nodemailer).

✅ **Advertisement System**

- **Exporters** can post **business requirements**.
- **Manufacturers** can post **product advertisements**.
- **Category filtering** and **search functionality**.
- Image gallery & ad details page.

✅ **Real-time Chat & Order Management**

- **Live chat** powered by **Socket.IO**.
- **Order request system**: Manufacturers can request orders from Exporters.
- **Order tracking** with statuses (**Pending, Ongoing, Completed**).

✅ **User Profiles & Reviews**

- **Company profile** with achievements, certifications & business details.
- **Public profiles** where users can showcase their business.
- **Ratings & Review system** to establish credibility.

✅ **Admin Management Dashboard**

- Admin can **manage users, ads, orders, and handle reports**.
- Dashboard provides an overview of **active users, pending ads, and reported issues**.

✅ **Real-time Notifications**

- Notification bell **updates in real-time** for chat messages & order updates.

✅ **Mobile Responsive Design**

- Works smoothly on **desktop, tablet, and mobile**.

---

## Tech Stack

| Technology                     | Usage                          |
| ------------------------------ | ------------------------------ |
| **React.js**                   | Frontend UI                    |
| **Node.js & Express.js**       | Backend API                    |
| **MongoDB & Mongoose**         | Database                       |
| **Socket.IO**                  | Real-time chat & notifications |
| **Nodemailer**                 | Email-based password reset     |
| **JWT (JSON Web Token)**       | User authentication            |
| **Cloudinary**                 | Image uploads                  |
| **Multer**                     | File handling                  |
| **Tailwind CSS / CSS Modules** | UI Styling                     |
| **Redux / Context API**        | State management               |

---

## Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/exporter-manufacturer-platform.git
cd exporter-manufacturer-platform
```

### 2️⃣ Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3️⃣ Configure `.env` Files

Create a `.env` file in the **backend folder** and add:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGO_URI=mongodb:your mangoDb url
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Use an App Password for Gmail SMTP (not your Gmail password)**.

---

### 4️⃣ Start the Application

#### Start Backend

```bash
cd backend
npm start
```

#### Start Frontend

```bash
cd frontend
npm start
```

🚀 **Visit** `http://localhost:3000` to see the app in action!

---

## Project Structure

```
exporter-manufacturer-platform/
│── backend/
│   ├── config/          # Database & server configuration
│   ├── controllers/     # Business logic (Auth, Ads, Chat, Orders, etc.)
│   ├── middleware/      # Auth & error handling
│   ├── models/         # MongoDB Schemas (User, Ad, Order, etc.)
│   ├── routes/         # API routes
│   ├── sockets/        # Socket.IO handlers (Chat & Notifications)
│   ├── uploads/        # Image uploads directory
│   ├── .env            # Environment variables
│   ├── server.js       # Entry point
│── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Context API for state management
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Application pages
│   │   ├── styles/        # CSS & Tailwind styles
│   │   ├── utils/         # Helper functions
│   │   ├── App.js         # Main component
│   │   ├── index.js       # React entry point
│── README.md
│── package.json
│── .gitignore
```

---

## API Documentation

### Authentication Routes

| Endpoint                          | Method | Description                |
| --------------------------------- | ------ | -------------------------- |
| `/api/auth/register`              | `POST` | Register a new user        |
| `/api/auth/login`                 | `POST` | Login user & return JWT    |
| `/api/auth/forgot-password`       | `POST` | Sends password reset email |
| `/api/auth/reset-password/:token` | `POST` | Resets password            |

### Ad Routes

| Endpoint       | Method   | Description            |
| -------------- | -------- | ---------------------- |
| `/api/ads`     | `GET`    | Get all advertisements |
| `/api/ads/:id` | `GET`    | Get a single ad by ID  |
| `/api/ads`     | `POST`   | Create a new ad        |
| `/api/ads/:id` | `PUT`    | Update an ad           |
| `/api/ads/:id` | `DELETE` | Delete an ad           |

---

## Common Issues & Debugging

### ❌ Email Sending Failed

**Fix:**

- Enable **2FA** for your Gmail account.
- Generate an **App Password** and update `.env`.

### ❌ MongoDB Not Connecting

**Fix:**

- Ensure MongoDB is running with:
  ```bash
  mongod --dbpath=/data/db
  ```

### ❌ Chat Messages Not Updating

**Fix:**

- Ensure **Socket.IO is running** in both frontend & backend.

---

## License

This project is licensed under the **MIT License**.

---

🔥 **Ready to revolutionize the Exporter-Manufacturer industry? Let's go! 🚀**
