import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tap Counter" },
      { name: "description", content: "Tap the round button to count up by one, or reset back to zero." },
      { property: "og:title", content: "Tap Counter" },
      { property: "og:description", content: "Tap the round button to count up by one, or reset back to zero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background">
      <p className="text-7xl font-bold tabular-nums text-foreground" aria-live="polite">
        {count}
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        aria-label="Increment"
        className="h-40 w-40 rounded-full bg-button text-2xl font-semibold text-button-foreground shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        Tap
      </button>
      <button
        onClick={() => setCount(0)}
        disabled={count === 0}
        aria-label="Reset counter"
        className="rounded-full border border-input bg-background px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        Reset
      </button>
    </main>
  );
}
