# 💹 Zerodha Clone – Stock Trading Platform Simulation

A full-stack simulation of the popular Zerodha trading platform. This project focuses on replicating core functionalities of Zerodha, including real-time charts, stock search, and user dashboard, all built using a modern MERN stack.

---

## 🚀 Features

- 📈 Live charting interface with technical indicators (Chart.js)
- 🔍 Stock search and real-time data mock
- 📋 Portfolio dashboard with stock holdings view
- 🧑‍💼 Secure user login & authentication (JWT-based)
- 💡 Clean, responsive, and intuitive UI
- ⚙️ Scalable architecture with modular folder structure

---

## 🛠️ Tech Stack

| Category           | Technology                                 |
|--------------------|---------------------------------------------|
| **Frontend**        | React.js, Tailwind CSS, Axios, Chart.js     |
| **Backend**         | Node.js, Express.js, Bcrypt.js, JWT         |
| **Database**        | MongoDB, Mongoose                           |
| **Authentication**  | JSON Web Tokens (JWT), bcrypt               |
| **State Management**| React Context API                          |
| **Dev Tools**       | Postman, Nodemon, concurrently              |
| **Version Control** | Git, GitHub                                 |
| **Deployment**      | (Optional: Render / Vercel / MongoDB Atlas) |

---

## 📂 Folder Structure

```
zerodha-clone/
│
├── backend/                     # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/                    # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── constants/
│       ├── context/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       └── App.jsx
│
├── dashboard/                  # Static dashboard images or data
│
├── images/                     # Project screenshots, logos
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

> Follow these steps to run the project locally.

1. **Clone the repository**
   ```bash
   git clone https://github.com/rcheetu-2004/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Setup backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Setup frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📬 Contact Me

<p align="center">
  <a href="mailto:rydhamcheetu4@gmail.com">
    <img src="https://img.shields.io/badge/Email-rydhamcheetu4@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge" />
  </a>
  <a href="https://github.com/rcheetu-2004">
    <img src="https://img.shields.io/badge/GitHub-rcheetu--2004-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
  </a>
  <a href="https://www.linkedin.com/in/rydhamcheetu">
    <img src="https://img.shields.io/badge/LinkedIn-Rydham%20Cheetu-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
  </a>
</p>
