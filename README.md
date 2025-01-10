# This is a project built on Nextjs framework


### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Start the Development Server


```bash
npm run dev
```

### 3. Launch Drizzle Studio

Visualize and manage your database with Drizzle Studio:

```bash
npx drizzle-kit studio
```

---

### Environment Variables

Ensure you create a `.env.local` file in the project root with the following structure:

```plaintext
DATABASE_URL=<your-database-url>

```

Replace `<your-database-url>` with the connection string for your database.

```plaintext
# Public API key for your frontend
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-publishable-key>

# Secret API key for server-side authentication
CLERK_SECRET_KEY=<your-secret-key>

# Custom routes for Clerk's sign-in and sign-up pages
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Add the above clerk variables to your `.env.local` file. Replace `<your-publishable-key>` and `<your-secret-key>` with the keys from your Clerk dashboard.

---

### Ready to Go!

Once the setup is complete, start the development server:

```bash
npm run dev
```

This template is ready for you to build and scale your Next.js application with ease.

---

Would you like additional sections for features, contributing guidelines, or troubleshooting?
