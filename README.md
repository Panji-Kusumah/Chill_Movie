# 🎬 Chill Movie

Modern movie streaming platform simulation built with React, Redux Toolkit, Axios, and Tailwind CSS.

---

## ✨ Features

* 🎞️ Browse trending, popular, top-rated, and latest movies
* 🔍 Discover movies by genre
* ❤️ Watchlist management (Add & Remove)
* 🗂️ Global State Management with Redux Toolkit
* 📱 Fully responsive design
* 🌙 Modern dark cinematic UI
* 🚫 Custom 404 Not Found page
* ⚡ Fast performance powered by Vite

---

## 🧠 State Management

Implemented using **Redux Toolkit**.

Features include:

* Store movie data globally
* Store watchlist data globally
* Add movie to watchlist
* Remove movie from watchlist
* Reusable Redux store across components

---

## 🛠️ Tech Stack

| Technology       | Usage              |
| ---------------- | ------------------ |
| React.js (Vite)  | Frontend Framework |
| Redux Toolkit    | State Management   |
| React Redux      | Redux Integration  |
| React Router DOM | Routing            |
| Axios            | API Requests       |
| Tailwind CSS     | Styling            |
| TMDB API         | Movie Data Source  |
| React Icons      | UI Icons           |

---

## 📂 Project Structure

```plaintext
src/
├── api/                # Axios & TMDB configuration
├── assets/             # Images, logos, static assets
├── components/         # Reusable UI components
├── layouts/            # Layout wrappers
├── pages/              # Application pages
├── store/              # Redux store & slices
├── css/                # Stylesheets
├── App.jsx             # Root component
└── main.jsx            # Application entry point
```

---

## 🌍 API Source

Movie data provided by:

**The Movie Database (TMDB)**

https://www.themoviedb.org/

---

## ⚙️ Environment Variables

Create a `.env` file in the root project:

```env
VITE_TMDB_KEY=YOUR_TMDB_API_KEY
VITE_API_URL=https://api.themoviedb.org/3
```

---

## 🚀 Installation

```bash
git clone https://github.com/Panji-Kusumah/Chill_Movie.git

cd chill-movie

npm install

npm run dev
```

---

## 👨‍💻 Author
**Panji Kusumah**

