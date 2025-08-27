// app/gbg-test/page.tsx
"use client";

import { db } from "@/lib/firebase";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Good Behavior Game 2 — Firebase wired ✅</h1>
      <p>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</p>
    </main>
  );
}
