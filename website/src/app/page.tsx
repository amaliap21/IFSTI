import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col justify-between"
      // px-24 pt-8 pb-24
    >
      <Hero />
    </main>
  );
}
