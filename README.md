# 3D Ordering Service

A Vue 3 web application for 3D printing services with Firebase backend and Telegram notifications.

## Features

- 3D model catalog browsing
- Order placement system
- Firebase hosting and Firestore database
- Telegram bot notifications for new orders
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Vue 3 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase Functions + Firestore
- **Hosting**: Firebase Hosting
- **Notifications**: Telegram Bot API

## Getting Started

### Prerequisites

- Node.js (v22 recommended)
- Yarn package manager
- Firebase CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

3. Install cloud functions dependencies:
   ```bash
   cd cloud_functions
   yarn install
   ```

### Development

Start the development server:
```bash
yarn dev
```

### Building

Build for production:
```bash
yarn build
```

### Deployment

Deploy to Firebase:
```bash
yarn deploy
```

## Project Structure

- `src/` - Vue application source code
  - `components/` - Reusable Vue components
  - `pages/` - Page components
  - `services/` - Business logic services
  - `repositories/` - Data access layer
- `cloud_functions/` - Firebase Cloud Functions
- `public/` - Static assets
- `dist/` - Production build output

## Firebase Configuration

The project uses Firebase for:
- Hosting (serves from `dist/` directory)
- Cloud Functions (Node.js 22 runtime)
- Firestore database
- Development emulators

## Telegram Integration

New orders trigger a Firebase Function that sends notifications to a configured Telegram chat via bot API.