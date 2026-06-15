# 🎙️ AI Text-to-Speech SaaS Platform

An AI-powered Text-to-Speech SaaS application that enables users to convert text into natural-sounding speech using the ElevenLabs API. The platform provides secure authentication, subscription-based access control, voice generation, and a modern user experience built with Next.js.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Green)
![Stripe](https://img.shields.io/badge/Stripe-Payments-purple)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-AI-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- 🔐 Secure user authentication with Clerk
- 🎙️ AI-powered voice generation using ElevenLabs
- 💳 Subscription management with Stripe
- 📂 User dashboard for managing generated audio
- ☁️ File storage and asset management with Appwrite
- 📱 Fully responsive UI
- 🎨 Modern UI built with Tailwind CSS and ShadCN UI
- ⚡ Fast performance with Next.js App Router
- 🗄️ MongoDB integration using Prisma ORM
- 🔒 Premium feature access control

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- ShadCN UI

### Backend
- Next.js Server Actions
- Prisma ORM
- MongoDB

### Authentication
- Clerk

### AI Integration
- ElevenLabs API

### Payments
- Stripe

### Storage
- Appwrite


## 🏗️ Architecture

```text
User
  │
  ▼
Next.js Frontend
  │
  ├── Clerk Authentication
  ├── Stripe Payments
  ├── ElevenLabs API
  └── Appwrite Storage
  │
  ▼
MongoDB + Prisma
```


## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# ElevenLabs
ELEVENLABS_API_KEY=

# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
APPWRITE_API_KEY=
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/JanadaJayathilaka/Text-to-speech-nextjs.git
cd Text-to-speech-nextjs
```

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## 💳 Subscription Flow

1. User signs up using Clerk.
2. User selects a pricing plan.
3. Stripe Checkout handles payment.
4. Stripe Webhooks update subscription status.
5. Premium users gain access to voice generation features.

---

## 🎙️ Voice Generation Flow

1. User enters text.
2. Request is sent to ElevenLabs API.
3. Speech audio is generated.
4. Audio is stored and displayed in the dashboard.
5. User can play or download the generated audio.

---

## 🔒 Authentication & Authorization

The application uses Clerk for:

- User Registration
- User Login
- Session Management
- Protected Routes
- User Metadata

---

## 🚀 Deployment

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

