# 🌤 Weather App — React + WeatherAPI

A modern, responsive weather application built with **React**, **Tailwind CSS**, and **WeatherAPI**.  
It lets users search for any city and view:
- current weather
- today’s hourly forecast
- air conditions
- 7-day forecast  
with a glassmorphic UI.

🔗 **Live Demo:** https://weather-app-vert-eight-73.vercel.app/

---

## ✨ Features

- 🔍 Search weather by city
- ⏱ Today’s hourly forecast
- 📅 7-day forecast
- 🌡 Temperature toggle (°C / °F)
- 🌧 Rain probability, wind speed, UV index
- ❌ Clear search button
- 📱 Fully responsive UI
- 🎨 Clean glass-style design

---

## 🛠 Tech Stack

- **Framework:** React (Vite)
- **CSS:** Tailwind CSS
- **Icons:** Lucide React + React Icons
- **API:** WeatherAPI
- **Hosting:** Vercel

---

## 📁 Project Structure

```
Weather-App/
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── weatherApi.js
│   ├── components/
│   │   ├── AirConditions.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── Sidebars.jsx
│   │   ├── Searchbar.jsx
│   │   ├── TodayForecast.jsx
│   │   └── WeeklyForecast.jsx
│   ├── hooks/
│   │   └── useWeather.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 🚀 Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ravi-Raj-Gupta/Weather-App.git
cd Weather-App
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Add your API key

Create a `.env` in the root:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

---

### 4️⃣ Start development

```bash
npm run dev
```

Your app should open at `http://localhost:5173` (or another port Vite tells you).

---

## 📡 API Reference

### Base URL

```
https://api.weatherapi.com/v1/forecast.json
```

### Example request

```
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&days=7&aqi=no&alerts=no
```

---

## 🧠 Concepts Used

- React Hooks (`useState`, `useEffect`)
- Custom hook (`useWeather`)
- Controlled input with submit
- Conditional rendering
- Tailwind responsive utilities
- API data mapping

---

## 📸 Screenshots

*(Optional: add images for desktop and mobile UI here)*

---

## 📜 License

This project is open source.

---

## 🙌 Author

**Ravi Raj Gupta**

If you like it, give it a ⭐ on GitHub! 🚀
