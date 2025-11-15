# HaniBazaar - React + Firebase Starter

A simple starter for an e-commerce demo using React (Vite) and Firebase (Auth + Firestore). Good for portfolio demos; uses mock payment (no real gateway).

## Setup

1. Clone repo

```bash
git clone <your-repo-url>
cd hanibazaar-starter
npm install
```

2. Create a Firebase project (https://console.firebase.google.com)
   - Enable **Email/Password** sign-in in Authentication
   - Create a Firestore database (start in test mode for quick demo)
   - (Optional) Enable Storage if you want to upload images

3. Replace `src/firebase.js` placeholders with your Firebase config (from Project Settings -> SDK)

4. Add sample products in Firestore collection named `products` with fields: `title` (string), `price` (number), `image` (string URL), `description` (string).

5. Run locally

```bash
npm run dev
```

6. Deploy to Vercel
   - Push repo to GitHub
   - Sign into Vercel and import the repo
   - Build command: `npm run build` ; Output directory: `dist`
   - Add Firebase config as environment variables if you prefer to keep secrets out of code, or leave `src/firebase.js` edited directly.

7. (Optional) Connect custom domain purchased from registrar (Namecheap/GoDaddy) to Vercel

## Notes / Next steps
- For production: set Firestore rules, enable billing for Storage if needed, add real payment gateway (Razorpay/Stripe), and protect the Admin route with authentication & role checks.
