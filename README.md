[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?logo=vite)](https://vitejs.dev/)

# Food Web Application 🍽️

Welcome to the Food Web App repository! This is a feature-rich, responsive food ordering and menu exploration web application designed to deliver an intuitive culinary e-commerce experience[cite: 11, 13, 14]. 

It features real-time state management via Redux Toolkit[cite: 11, 14], live API integrations for dish discovery and nutritional details[cite: 13, 14], interactive hero carousels[cite: 13], and responsive order management UI components[cite: 11, 15].

---
# Live Link
[🚀 View Live Demo](https://copper-apron-restaurant-repo-iota.vercel.app)

# Screenshots

| [Home](https://github.com/MohammedFaizaan/Copper_apron_Restaurant-repo/blob/main/the_copper_apron/src/assets/screenshots/home.png) | 
[Home_Mobile](https://github.com/MohammedFaizaan/Copper_apron_Restaurant-repo/blob/main/the_copper_apron/src/assets/screenshots/home_mobile.png) & 
[Home_Mobile hamburger button](https://github.com/MohammedFaizaan/Copper_apron_Restaurant-repo/blob/main/the_copper_apron/src/assets/screenshots/home_navbar_mobile.png) |

---

## 🎨 Key Features

### 1. 🛒 Redux-Powered Cart & Order Engine
* Utilizes **Redux Toolkit** (`cartSlice`) to manage real-time shopping cart states[cite: 11, 14].
* Allows seamless quantity increments and decrements directly on order cards, automatically calculating item totals and cumulative spent amounts[cite: 11].
* Includes state checks to handle empty order views and prompt users back to the menu[cite: 11].

### 2. 🍲 Dynamic Menu Exploration & Recipe Overlays
* Integrates directly with the `DummyJSON Recipes API` to populate dish selections, compute pricing dynamically, and manage search-based filtering[cite: 14].
* Features custom client-side pagination to cycle through recipe lists efficiently[cite: 14].
* Provides an interactive detail overlay for each dish that dynamically fetches rating, cuisine type, caloric content, serving sizes, and full ingredient lists[cite: 14].

### 3. 🎠 Interactive Featured Carousel
* Incorporates **Swiper** modules (Autoplay, Pagination, EffectFade, Navigation) to deliver engaging hero banners and featured top-rated dish carousels[cite: 13].
* Features custom-styled slider navigation buttons with smooth hover effects and responsive breakpoints[cite: 13].

### 4. 📱 Charcoal & Amber Gold Design System
* Crafted using **Tailwind CSS** with a dark theme aesthetic, featuring charcoal backgrounds, warm amber typography, and glassmorphism backdrop blurs[cite: 11, 12, 13, 14].
* Optimized across screen sizes using flexible layouts, grid breakpoints, and animated skeleton loaders during asynchronous data fetching[cite: 11, 12, 13, 14].

---

## 🛠️ Technology Architecture

* **Markup & UI Library:** React (JSX, Functional Components, Custom State Hooks)[cite: 11, 13, 14]
* **State Management:** Redux Toolkit & React-Redux (`useSelector`, `useDispatch`)[cite: 11, 14]
* **Routing:** React Router DOM (`Link`, single-page app navigation)[cite: 11, 13, 15]
* **Styling Framework:** Tailwind CSS (Utility classes, customized dark theme colors)[cite: 11, 12, 13, 14]
* **Sliders & Components:** Swiper.js[cite: 13]
* **Data Sources:** [DummyJSON Recipes API](https://dummyjson.com/docs/recipes)[cite: 13, 14]

---

## 📂 Project Structure

```text
food-web/
├── index.html                  # HTML entry document
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Lockfile for dependency tree
├── vite.config.js              # Vite build configuration
└── src/
    ├── main.jsx                # Application root mounting file
    ├── app/
    │   └── store.js            # Redux central store configuration
    ├── assets/                 # Local image assets and branding
    ├── components/             # Reusable global UI modules
    │   ├── food_web/
    │   ├── footer/             # Site footer component
    │   └── navbar/             # Navigation bar component
    ├── features/
    │   └── cart/
    │       └── cartSlice.js    # Redux cart state reducers & actions
    └── pages/                  # Main route view components
        ├── about/
        │   └── About.jsx       # Kitchen mission, vision, and team showcase
        ├── home/
        │   └── Home.jsx        # Hero banner, featured dishes slider, top recipes
        ├── menu/
        │   └── Menu.jsx        # Searchable recipes grid, pagination, recipe detail modal
        ├── orders/
        │   └── Orders.jsx      # Active orders list, price calculation, quantity toggles
        └── orders_history/
            └── Order_History.jsx # Historical order archive interface
