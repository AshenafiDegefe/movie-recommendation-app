# 🎬 Dynamic Movie Recommendations Dashboard
This project is a modern, responsive web application built with Next.js and TypeScript, designed to provide users with personalized movie recommendations and an interactive browsing experience powered by The Movie Database (TMDB) API.

## 🚀 Project Goals
The development of this application is focused on three primary objectives to deliver a rich, scalable, and personalized user experience:

### 1. Dynamic Routing Implementation
We will implement robust dynamic routing using the Next.js framework to create dedicated, search-engine-friendly pages for individual movies.
**Objective:** Seamlessly navigate from the main dashboard to a detailed movie page (e.g., /movie/[id]).

**Benefit:** Allows users to view comprehensive details, cast, ratings, and specific recommendations for a chosen title.

### 2. User Personalization & State Management

The application will include functionality for users to bookmark and manage their favorite movies, creating a personalized viewing list.

**Objective:** Implement a system to save favorite movie selections. This can be achieved either using browser-side storage (like localStorage or IndexedDB) for persistence or by integrating with a backend API for cross-device synchronization.

**Benefit:** Enhances user engagement by allowing them to curate and quickly return to their preferred content.

### 3. Interactive and Responsive Dashboard

We aim to build a visually appealing and highly responsive main dashboard that facilitates easy browsing and discovery of movie recommendations.

**Objective:** Design a user interface using Tailwind CSS and React components that adapts flawlessly to mobile, tablet, and desktop screen sizes.

**Benefit:** Provides a smooth, modern, and engaging browsing experience regardless of the device used.

## ⚙️ Technology Stack

**Framework:** Next.js (React)

**Language:** TypeScript

**Styling:** Tailwind CSS (for rapid, utility-first styling)

**Data Fetching:** Native fetch API (or Axios)

**Movie Data:** The Movie Database (TMDB) API

## 📝 Setup and Installation

Follow these steps to get your development environment running:

**Prerequisites**

Node.js (LTS version) installed.

A valid API Bearer Token from The Movie Database (TMDB).

**Installation Steps**

1, Clone the repository:
git clone [your-repo-url]
cd [your-project-folder]

2, Install dependencies:

npm install
# or
yarn install

3, Configure API Key:
The application currently uses a placeholder token. To resolve the 401 Unauthorized error, you must update the application code with your actual TMDB Bearer Token.

4, Run the development server:

npm run dev
# or
yarn dev

5, Open your browser and navigate to http://localhost:3000.

## 📂 Project Structure

.
├── components/          # Reusable UI components (MovieCard, Header, etc.)
├── app/                 # Next.js App Router root
│   ├── page.tsx         # Main Dashboard component
│   └── movie/[id]/      # Dynamic routing for detailed movie pages
├── public/              # Static assets (images, favicon)
├── styles/              # Global styles and Tailwind configuration
└── types/               # TypeScript interface definitions
