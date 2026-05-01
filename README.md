# Baspa Travels | Premium Himalayan Expeditions

A luxury travel platform built with Next.js 14, Three.js, and GSAP, offering bespoke journeys to the heart of the Himalayas.

## 🏔️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **3D Engine**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ScrollToPlugin)
- **Styling**: Vanilla CSS + Tailwind-like utility classes
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Folder Structure

```text
src/
  app/
    (routes)/      # Application routes (Home, Tours, About, etc.)
    api/           # API endpoints (Contact, Booking)
  components/
    ui/            # Atomic reusable UI components
    sections/      # Complex page-level sections
    layout/        # Persistent layout elements (Navbar, Footer)
    3d/            # Three.js / R3F components
  hooks/           # Custom React hooks
  lib/             # External library configs (GSAP, Three)
  types/           # TypeScript interfaces and types
  styles/          # Global styles and CSS modules
public/            # Static assets (images, fonts, videos)
tests/             # k6 Load testing scripts
```

## 🛠️ Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd baspa-tours-and-travels
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚀 Deployment

The project is optimized for deployment on **Vercel**.

1. Push your changes to GitHub/GitLab/Bitbucket.
2. Connect your repository to Vercel.
3. Vercel will automatically detect Next.js and deploy.

## 🧪 Performance & Testing

Automated load testing is configured using **k6**.
Run standard load tests with:
```bash
npm run test:load
```

---

*Crafted for the peaks of Kinnaur and beyond.*
