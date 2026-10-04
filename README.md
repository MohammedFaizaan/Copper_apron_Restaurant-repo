# Copper_apron_Restaurant-repo

A modern, responsive web application for exploring gourmet menus, customizing item quantities, and managing food orders in real-time. Built using React, Redux Toolkit, Vite, and Tailwind CSS.

---

##🚀 Features
Interactive Home Banner: Featured dishes showcase driven by Swiper with auto-play, custom control buttons, and smooth transitions.

Dynamic Menu & Search: Interactive menu fetching recipes live from DummyJSON API, featuring pagination, instant dish search, and real-time recipe detail overlays (ingredients, calories, ratings, and cuisine).

Cart & Order Management: Full shopping cart state management using Redux Toolkit. Add items, modify quantities directly, and auto-calculate sub-totals and grand totals.

Order Tracking UI: Clean interface to manage active food deliveries and track placed items.

Responsive Dark Theme Design: Aesthetic dark UI built with Tailwind CSS, styled in rich charcoal and amber gold accents.

##🛠️ Tech Stack
Frontend Library: React (v18+)

Build Tool: Vite

State Management: Redux Toolkit & React-Redux

Routing: React Router DOM (react-router-dom)

Styling: Tailwind CSS

Carousel / Slider: Swiper

API: DummyJSON Recipes API

##📂 Project Structure
Plaintext
Copper_apron_Restaurant-repo/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── app/
    │   └── store.js
    ├── assets/
    ├── components/
    │   ├── food_web/
    │   ├── footer/
    │   └── navbar/
    ├── features/
    │   └── cart/
    │       └── cartSlice.js
    └── pages/
        ├── about/
        │   └── About.jsx
        ├── home/
        │   └── Home.jsx
        ├── menu/
        │   └── Menu.jsx
        ├── orders/
        │   └── Orders.jsx
        └── orders_history/
            └── Order_History.jsx
🚦 Getting Started
Prerequisites
Ensure you have Node.js (version 16 or higher) installed on your machine.

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/food-web.git
cd food-web
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open your browser and navigate to http://localhost:5173.

📜 Available Scripts
In the project directory, you can run:

npm run dev: Runs the app in development mode with live reloading.

npm run build: Builds the app for production to the dist folder.

npm run preview: Locally previews the production build.
