# 🎬 Chill Movie – Streaming Platform (Frontend Simulation)
## 📌 Overview
**Chill Movie** adalah aplikasi web berbasis React.js yang mensimulasikan platform streaming film dan TV show.  
Aplikasi ini dirancang untuk memberikan pengalaman eksplorasi konten seperti platform modern dengan fokus pada UI/UX, arsitektur frontend, dan state management.

Pengguna dapat:
- Menjelajahi katalog film & TV show
- Mencari konten secara real-time
- Mendapatkan rekomendasi personal (simulasi)
- Mengakses konten orisinal eksklusif (UI simulation)

---

## 🧱 Frontend Architecture

### ♻️ Reusable Component System
- Menggunakan pendekatan modular (Atomic Design concept)
- Komponen dipisahkan berdasarkan tanggung jawab (Navbar, Hero, MovieRow, dll)

### 🌐 Global State Management
- Menggunakan **Zustand**
- Menyimpan:
  - Session user
  - Preferensi UI
  - Data lokal (persisted state)
- Menghindari prop drilling

### 🔍 SEO Optimization
- Dynamic meta tags menggunakan **React Helmet Async**
- Optimasi sharing sosial media & indexing

### 🎬 Media Playback Simulation
- UI video player dengan kontrol (play/pause/seek simulation)

---

## 🛠️ Tech Stack

### Core
- ⚛️ React.js (Vite)
- 🧠 JavaScript (ES6+)
- 🌐 HTML5 & CSS3

### Styling
- 🌬️ Tailwind CSS

### State & Routing
- 🧠 Zustand (Global State + Persistence)
- 🚏 React Router DOM

### SEO
- 🔎 React Helmet Async

### API
- 🎬 TMDB API (The Movie Database)
  - Data film & TV show
  - Rating, cast, crew, poster, trailer metadata

---

## 📂 Project Structure

```plaintext
src/
├── assets/        # Gambar, ikon, aset statis
├── components/    # Komponen UI reusable (Navbar, Hero, MovieRow)
├── css/           # Konfigurasi global Tailwind
├── layouts/       # Layout utama (MainLayout, AuthLayout)
├── pages/         # Halaman aplikasi (Home, Login, Register)
├── store/         # Zustand state management
└── utilities/     # Helper functions (auth logic, helpers)