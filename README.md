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

🧑‍💻 Author

Anggi Satria
Frontend Developer — passionate about clean UI, scalable architecture, and performance-driven apps.
