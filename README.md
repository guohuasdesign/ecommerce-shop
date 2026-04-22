# E-Commerce Frontend Project

A high-performance e-commerce web application built with React, focusing on user experience and SEO.

## 🚀 Key Features

- **Live Data**: Integrated with **DummyJSON API** for real-time product fetching.
- **Enhanced UX**: Includes **React Spinners** for smooth loading states and transitions.
- **Accessibility (A11Y)**: Developed with semantic HTML and ARIA labels for screen reader compatibility.
- **SEO Optimized**: Optimized structure and meta-tags for better search engine visibility.
- **Responsive Design**: Fully functional across all device sizes using Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **API**: [DummyJSON](https://dummyjson.com/)
- **Feedback**: React Spinners
- **Build Tool**: Vite

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── components/      # UI Components (Loading spinners, Product items)
│   ├── pages/           # View components (Home, Cart, Product Detail)
│   ├── services/        # API calls to DummyJSON
│   ├── index.css        # Tailwind imports & custom global gradients
│   ├── App.jsx          # Routing & Layout logic
│   └── main.jsx         # Entry point
└── package.json         # Project metadata & dependencies
```

## ⚙️ Development

### Setup

```bash
npm install
```

### Start Development

```bash
npm run dev
```

## 📈 Performance & Accessibility

- **Loading States**: Uses `react-spinners` to prevent layout shifts and provide visual feedback during API calls.
- **SEO**: Semantic tags (header, main, section, footer) used throughout to improve indexability.
- **A11Y**: Focused on keyboard navigation and contrast ratios to ensure the site is usable for everyone.
