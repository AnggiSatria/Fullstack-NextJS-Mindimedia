🌿 Clone Ulaman Bali Web App

This is a clone project of the Ulaman Bali Web App, built using Next.js 16 with modern frontend technologies and clean architectural patterns. The purpose of this project is to replicate the main UI and interactions of the Ulaman Bali website while maintaining scalable, maintainable, and reusable code through the Atomic Design methodology.

🚀 Tech Stack
Category Technology
Framework Next.js 16

Language TypeScript

Styling Tailwind CSS 4

- tw-animate-css

UI Components Radix UI Popover
, Lucide React Icons

State Management Zustand

Animations Framer Motion
, GSAP

Data Fetching Axios

- TanStack React Query v5

ORM / Database Prisma

Environment Management dotenv

Code Quality ESLint 9

- Prettier

Utility clsx
, class-variance-authority
🧱 Project Architecture — Atomic Design

This project follows the Atomic Design pattern for better scalability and component reusability.

🔹 Atoms

The smallest, reusable UI components that serve as building blocks.
Examples:

Buttons

Icons

Inputs

Typography elements

🔹 Molecules

Combinations of atoms that form a slightly more complex component.
Examples:

Search bar

Card with image and title

Modal header

🔹 Organisms

Larger, reusable sections composed of multiple molecules and atoms.
Examples:

Navbar

Footer

Hero section

Carousel

🔹 Templates

Page-level layout structure that defines overall content placement without specific data.
Examples:

HomePage layout

AboutPage layout

🔹 Pages

Final implementation where templates are filled with actual data and connected to backend or API.

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/clone-ulaman-bali-web-app.git
cd clone-ulaman-bali-web-app

2️⃣ Install Dependencies

Using pnpm (recommended):

pnpm install

or with npm:

npm install

3️⃣ Setup Environment Variables

Create a .env file at the root of your project and define the required environment variables:

DATABASE_URL=your_database_url_here
NEXT_PUBLIC_API_URL=your_api_url_here

4️⃣ Run Development Server
pnpm dev

Visit: http://localhost:3000

🛠️ Build & Production
Build the App
pnpm build

Start the Production Server
pnpm start

📁 Project Structure
.
├── app/ # Next.js App Router
│ ├── (pages)/
│ ├── layout.tsx
│ └── page.tsx
│
├── components/
│ ├── atoms/
│ ├── molecules/
│ ├── organisms/
│ └── templates/
│
├── lib/ # Utilities, hooks, and configs
├── prisma/ # Prisma schema and migrations
├── public/ # Static assets
├── styles/ # Global CSS
├── .env # Environment variables
├── next.config.mjs
└── package.json

🧩 Key Features

Fully responsive layout

Smooth animations with Framer Motion & GSAP

Atomic Design system for scalable UI development

Optimized API calls with React Query

Strong typing and code reliability with TypeScript

Clean and modern Tailwind-based design

💡 Future Improvements

Integrate CMS for dynamic content (e.g., Sanity / Strapi)

Add localization (i18n)

Improve accessibility (a11y)

Enhance SEO optimization

🧠 Additional Questions & Answers
🧩 Front End Implementation

1. Component Structure
   Saya menggunakan pendekatan Atomic Design untuk membangun struktur komponen.
   Dengan membagi komponen menjadi atoms, molecules, organisms, templates, dan pages, saya dapat menjaga:

Reusability: Komponen kecil dapat digunakan kembali di berbagai halaman.

Maintainability: Perubahan dapat dilakukan secara modular tanpa memengaruhi keseluruhan aplikasi.

Scalability: Penambahan fitur atau halaman baru dapat dilakukan dengan mudah karena struktur sudah terorganisir.

2. State Management
   Saya menggunakan kombinasi local state (React useState/useReducer) dan global state dengan Zustand.
   Pendekatan saya:

Gunakan local state untuk komponen yang berdiri sendiri (misalnya modal, dropdown, atau form input).

Gunakan global state (Zustand) untuk data yang dibutuhkan lintas halaman seperti tema, navigasi, atau data user session.
Hal ini menjaga aplikasi tetap ringan dan tidak over-engineered.

3. Responsive Strategy
   Responsivitas diatur menggunakan:

Tailwind CSS responsive utilities (sm:, md:, lg:) untuk konsistensi di berbagai ukuran layar.

Fluid layout menggunakan grid & flexbox.

Adaptive images dengan Next.js <Image> component untuk optimalisasi per-device.

Testing melalui Chrome DevTools device mode untuk memastikan tampilan seragam di mobile, tablet, dan desktop.

4. Performance Optimization
   Langkah-langkah yang saya lakukan untuk meningkatkan performa:

Code splitting dan dynamic import (next/dynamic) agar bundle size tetap kecil.

Image optimization dengan Next.js image loader dan kompresi otomatis.

Memoization (useMemo, useCallback) untuk mencegah re-render tidak perlu.

Lighthouse audit digunakan untuk memastikan waktu muat cepat dan performa tinggi.

💾 Data Management

5. Data Fetching
   Untuk data berbasis local JSON, struktur disusun berdasarkan tipe halaman agar mudah diperluas, contoh:

data/
├── home.json
├── rooms.json
├── facilities.json
└── gallery.json

Dengan struktur seperti ini, saya dapat menambahkan halaman baru (misalnya spa.json) tanpa perlu mengubah arsitektur utama.

6. API Integration
   Jika menggunakan custom API, saya menerapkan:

Axios instance global untuk mengatur baseURL, header, dan interceptors.

TanStack React Query v5 untuk menangani loading states, error handling, dan caching otomatis.

Error ditangani dengan fallback UI dan notifikasi yang ramah pengguna.

7. Content Structure
   Konten disusun secara modular dan fleksibel:

rooms: menampung informasi kamar, harga, deskripsi.

facilities: berisi fasilitas umum dan ikon terkait.

gallery: menyimpan daftar gambar dan keterangan alt text.
Struktur ini memungkinkan ekspansi ke CMS di masa depan tanpa refactor besar.

⚙️ Deployment & Infrastructure

8. Vercel Deployment
   Konfigurasi yang saya terapkan:

Build command: pnpm build

Output directory: .next (default Next.js)

Gunakan Image Optimization & Edge Network Vercel untuk waktu muat cepat global.

Tambahkan NEXT_PUBLIC_API_URL pada environment variables di Vercel untuk memisahkan dev/prod.

9. Environment Setup
   Saya memisahkan variabel lingkungan sebagai berikut:

.env.local untuk pengembangan (localhost).

.env.production untuk deployment.
Semua variabel diakses melalui process.env.NEXT*PUBLIC*\* agar aman dan terkontrol.

10. Asset Optimization
    Strategi optimasi:

Kompresi gambar otomatis via Next.js Image Optimization.

Font di-host secara lokal dengan font-display: swap untuk mencegah blocking render.

File statis (ikon, JSON) disimpan di /public dan diload sesuai kebutuhan.

🗄️ CMS Integration (Bonus Points)

11. API Design (Laravel Filament)
    Jika CMS diimplementasikan, saya menggunakan pendekatan RESTful API:

/api/rooms, /api/facilities, /api/gallery

Menggunakan resource controller Laravel agar struktur tetap rapi.

Response diformat dalam JSON standar dengan status code dan pesan konsisten.

12. Content Modeling
    Model database mengikuti relasi berikut:

rooms (id, title, description, price, images)

facilities (id, name, icon, description)

galleries (id, image_url, category)
Struktur ini fleksibel untuk konten dinamis tanpa duplikasi data.

13. Admin UX
    Fitur penting yang saya rancang untuk admin panel:

CRUD sederhana dengan preview konten.

Upload gambar menggunakan FilePond + Pintura.

Filter dan pencarian untuk data besar.

Dark/light theme untuk kenyamanan penggunaan jangka panjang.

🧭 Best Practices

14. Code Organization
    Struktur proyek dijaga agar mudah dikembangkan oleh tim:

Folder berdasarkan fitur dan jenis komponen (atomic design).

Gunakan lib/ untuk hooks & utils agar tidak tercampur dengan UI.

ESLint & Prettier menjaga konsistensi format kode di seluruh tim.

15. Error Handling
    Pendekatan yang digunakan:

Network errors: Ditangani dengan retry otomatis via React Query.

Data errors: Ditampilkan fallback UI (empty/error state).

UI errors: Menggunakan ErrorBoundary untuk menangkap error tanpa crash seluruh aplikasi.
Pendekatan ini memastikan pengalaman pengguna tetap stabil dan aman dari crash fatal.

🧑‍💻 Author

Anggi Satria
Frontend Developer — passionate about clean UI, scalable architecture, and performance-driven apps.
