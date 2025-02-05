# 🌟 Movie Portal  

Welcome to the **Movie Portal**! This web application allows users to browse, manage, and explore their favorite movies. It features user authentication, movie management, and a sleek, user-friendly interface.  

---

## 🚀 Live Website  
[https://movie-portal-159c3.web.app](https://movie-portal-159c3.web.app)

---

## 📝 Features  

1. **User Authentication**  
   - Secure login and signup functionality.  

2. **CRUD Operations**  
   - Create, Read, Update, and Delete movies from the database.  

3. **Search Functionality**  
   - Quickly search for movies by title or genre.  

4. **Favorite Movies List**  
   - Save movies to your personal favorites list.  

5. **Dark/Light Theme Toggle**  
   - Switch between dark and light modes for a personalized user experience.  

6. **Responsive Design**  
   - Fully responsive and optimized for all devices.  

---

## 🛠️ Technologies Used  

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Tokens (JWT)  
- **Routing:** React Router  

---

## 📚 Dependencies Used  

### Frontend Dependencies  
- React.js  
- React Router DOM  
- Tailwind CSS  
- Axios  
- React Icons  

### Backend Dependencies  
- Express.js  
- Mongoose  
- JSON Web Token (JWT)  
- dotenv  
- cors  
- bcrypt.js  
- nodemon (for development)  

---

## 📚 Setup Instructions  

### Prerequisites  
- Node.js installed  
- MongoDB instance running  

### Steps to Run Locally  

#### 1. Clone the Repository  
```bash
git clone https://github.com/maimunarahma/Movie-Portal.git
cd Movie-Portal
```

#### 2. Setup the Backend  
```bash
cd server
npm install
```
- Create a `.env` file and add the following:
  ```
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```
- Start the server:
  ```bash
  npm start
  ```

#### 3. Setup the Frontend  
```bash
cd ../client
npm install
npm start
```

#### 4. Open the Application  
- Visit `http://localhost:3000` in your browser.  

---

Enjoy using **Movie Portal**! 🎬📺

