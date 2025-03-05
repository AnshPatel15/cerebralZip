# CerebralZip Assignment

A modern, responsive (somewhat, I tried but then ran out of time) dashboard application with data visualization capabilities built with React and Express.

## Overview

This assignment is a full-stack web application that provides an interactive dashboard for visualizing and analyzing data. It features a clean, modern UI with various chart components for data representation, including gauge charts, line graphs, bar graphs, and more.

## Project Structure

The project is organized into two main directories:

- **Frontend**: React application built with Vite
- **Backend**: Express.js server with SQLite database hosted on Render.com

### Frontend

The frontend is a React application that uses:

- **React 18.3.1**: Modern React with hooks for state management
- **React Router 7.2.0**: For navigation between pages
- **Recharts 2.15.1**: For creating interactive charts and data visualizations
- **Tailwind CSS 4.0.9**: For styling and responsive design

### Backend

The backend is built with:

- **Express.js**: Web server framework
- **SQLite3**: Lightweight database for storing application data (Low scope for assignment, deployed on Render.com)
- **CORS**: For handling cross-origin requests
- **dotenv**: For environment variable management

## Database

The application uses SQLite for data storage with three tables:
- `monthly_data`: Stores monthly comparison data
- `products`: Stores product information including sales and ratings
- `line_chart_data`: Stores web sales and offline sales for line chart

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cerebralZip.git
   cd cerebralZip
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
   (Not needed anymore after deploying on render.com but can revert to local setup if needed)

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```
   (Not needed anymore after deploying on render.com but can revert to local setup if needed)

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## Deployment

The application was deployed on Vercel and the backend was deployed on Render.

