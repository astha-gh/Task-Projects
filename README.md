# Backend Developer Intern Assignment – Tasks API

This project is a scalable REST API with authentication and role-based access, along with a basic frontend UI to demonstrate API usage.

---

## 🔗 Live Links

- Frontend (Netlify):  
  https://taaaaskapi.netlify.app

- Backend API (Render):  
  https://tasks-backend-o7l0.onrender.com

- Postman API Documentation:  
  https://documenter.getpostman.com/view/39629641/2sBXVfksEZ

---

## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

**Frontend**
- React.js (Vite)
- React Router
- Fetch API

---

## ✨ Features Implemented

### Authentication & Authorization
- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Role-based access (user / admin)

### Task Management (CRUD)
- Create task
- Get all user tasks
- Update task
- Delete task
- Protected routes using JWT

### Security & Validation
- Input validation
- Centralized error handling
- Secure JWT token handling

---

## 📬 API Documentation

- Postman Collection JSON is included in the backend folder
- Public Postman documentation link is provided above

---

## 🧩 Scalability Notes

- Modular project structure for adding new entities
- JWT-based stateless authentication
- Can be extended to microservices architecture
- Redis caching can be added for frequently accessed data
- Load balancing supported via stateless backend design

---

## ▶️ Local Setup

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev
```

---

## Author
Astha Devadiga
asthadevadiga7@gmail.com

