DCC Web Newer Version
A modern, enterprise-ready web application built with Angular 21+. This project utilizes a standalone component architecture, avoiding legacy modules for a cleaner, faster, and more scalable codebase.

🚀 Quick Start
Prerequisites
Make sure you have the following installed on your machine:

Node.js: (LTS version recommended)
npm: v11.6.2 (or compatible)
Angular CLI: v21.0.4+ (npm install -g @angular/cli)

Installation
Clone the repository and install the dependencies:

Bash

# Install all required npm packages

npm install
Development Server
To run the app locally with live-reloading:

Bash

# Starts the development server

ng serve
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

🏗️ Project Architecture
This application follows a modern Core / Features / Shared folder structure to cleanly separate layout components, specific pages, and global routing.

Plaintext
dcc-web-new/
├── public/ # Static assets served directly at the root path
│ └── Images/ # Logos, banners, and icons (e.g., /Images/logo.png)
├── src/
│ ├── app/
│ │ ├── core/ # Singleton layout elements and interceptors
│ │ │ └── layout/
│ │ │ ├── header/ # Sticky navbar and mega-menu logic
│ │ │ └── footer/ # Global footer component
│ │ ├── features/ # Routable page components (Lazy-loadable)
│ │ │ ├── home/ # Landing page (Hero, Services, Marquee)
│ │ │ └── about/ # About page
│ │ ├── app.ts # Root component (holds <router-outlet> and smooth scroll init)
│ │ └── app.routes.ts # Global route definitions
│ ├── styles/ # Global CSS files (Bootstrap overrides, variables)
│ ├── index.html # Main HTML entry point (contains CDN links)
│ ├── main.ts # Application bootstrap file
│ └── styles.css # Main stylesheet importing styles/ folder contents
├── package.json # Project metadata and dependencies
└── angular.json # Angular workspace configuration
