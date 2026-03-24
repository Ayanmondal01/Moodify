<div align="center">
  <img src="https://img.shields.io/github/license/YOUR_GITHUB_USERNAME/moodditection?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react" alt="Frontend: React" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&logo=node.js" alt="Backend: Node.js" />
  <img src="https://img.shields.io/badge/AI-MediaPipe-orange?style=flat-square" alt="AI: MediaPipe" />

  <h1>🎭 MoodDitection</h1>
  <p>An intelligent, full-stack application that detects user moods in real-time via webcam using Google's MediaPipe, and curates personalized music experiences based on emotional states.</p>
</div>

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [🏗 Architecture & Tech Stack](#-architecture--tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [💻 Usage](#-usage)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **Real-Time Facial Emotion Recognition**: Uses `@mediapipe/tasks-vision` to accurately capture and analyze user facial expressions to determine their current mood.
- **Smart Music Recommendations**: Dynamically fetches and plays categorized songs tailored perfectly to four distinct emotional states (**Happy**, **Surprised**, **Sad**, and **Neutral**) via the backend API.
- **Self-Hosted Music Library**: Comes packed with an initial catalog of 100 songs mapped to various moods. Users can also seamlessly upload and manage their own custom mp3 files directly through the app.
- **Secure Authentication**: Robust user registration, login, and protected routes utilizing JWT (JSON Web Tokens) and bcrypt.
- **Modern UI/UX**: Built with React and styled with SCSS, featuring dynamic styling, smooth animations, and a responsive design.
- **Media Management**: Secure and efficient image/audio uploads and storage using ImageKit and node-id3 for MP3 metadata.
- **High Performance caching**: Integrated Redis (`ioredis`) in the backend to speed up data retrieval and improve performance.

---

## 🏗 Architecture & Tech Stack

The application is divided into two main spaces: **Frontend** and **Backend**.

### 🎨 Frontend
- **Framework**: React 19 + Vite for ultra-fast compilation.
- **Routing**: React Router v7.
- **AI Integration**: Google MediaPipe (`@mediapipe/tasks-vision`) for client-side live visual tracking.
- **Styling**: SCSS (Sass).
- **HTTP Client**: Axios.

### ⚙️ Backend
- **Runtime**: Node.js & Express.js.
- **Database**: MongoDB (via `mongoose`).
- **Caching**: Redis (via `ioredis`).
- **File Storage**: ImageKit (`@imagekit/nodejs`) and local parsing via `multer`.
- **Authentication**: JWT & Cookie-parser.
- **Audio Processing**: `node-id3` to parse audio track parameters.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**
- **MongoDB**: A running local instance or a MongoDB Atlas URI
- **Redis**: A running Redis server instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/moodditection.git
   cd moodditection
   ```

2. **Setup the Backend:**
   ```bash
   cd Backend
   npm install
   ```

3. **Setup the Frontend:**
   ```bash
   cd ../Frontend
   npm install
   ```

### Environment Variables

You need to set up `.env` files for the backend to run securely. 

Navigate to the `Backend` directory and create a `.env` file with the following templates:

```env
# Backend/.env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=your_redis_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

---

## 💻 Usage

To run the full stack app, you will need to start both servers concurrently.

**1. Start the Backend server:**
```bash
cd Backend
npm run dev
# The server will run on http://localhost:3000
```

**2. Start the Frontend client:**
```bash
cd Frontend
npm run dev
# The client will run on http://localhost:5173
```

**3. Open the App:**
Navigate to `http://localhost:5173` in your browser. Grant webcam permissions when prompted so the AI module can properly evaluate your mood!

---

## 🛣 Roadmap

- [ ] Provide more granular controls for admins over the self-hosted 100+ song library.
- [ ] Add historical mood tracking with intuitive chart visualizations for users.
- [ ] Support custom playlist generation and saving.
- [ ] Add social sharing features to share moods and tracks with friends.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <i>Developed with ❤️ for better, mood-aware computing.</i>
</div>
