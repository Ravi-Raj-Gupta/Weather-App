# 🌤 Weather App — React + WeatherAPI

A modern, responsive weather application built with React, Tailwind CSS, and WeatherAPI. It allows users to search for any city, view current weather, today's hourly forecast, air conditions, and a 7-day forecast.

Live Demo: https://weather-app-vert-eight-73.vercel.app/

## Features

- Search weather by city name
- Today’s hourly forecast
- 7-day weather forecast
- Toggle between °C and °F
- Chance of rain, wind speed, UV index
- Glassmorphism UI with Tailwind CSS
- Fully responsive layout
- Clear search input button
- Real-time weather data

## Tech Stack

- React (Vite)
- Tailwind CSS
- WeatherAPI
- Lucide React & React Icons
- Vercel

## Project Structure

src/
 ┣ components/
 ┃ ┣ CurrentWeather.jsx
 ┃ ┣ TodayForecast.jsx
 ┃ ┣ WeeklyForecast.jsx
 ┃ ┣ AirConditions.jsx
 ┃ ┣ Searchbar.jsx
 ┃ ┗ Sidebars.jsx
 ┣ hooks/
 ┃ ┗ useWeather.js
 ┣ api/
 ┃ ┗ weatherApi.js
 ┣ App.jsx
 ┣ main.jsx
public/
 ┗ favicon.svg

## Setup

git clone https://github.com/your-username/weather-app.git  
cd weather-app  
npm install  
npm run dev  

## API

https://api.weatherapi.com/v1/forecast.json

Example:

https://api.weatherapi.com/v1/forecast.json?key=API_KEY&q=London&days=7&aqi=no&alerts=no

## License

Open-source project.
