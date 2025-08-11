'use client'

import { Button } from "@/components/shared/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS is working!
        </h1>
        <p className="text-lg text-gray-700">
          If you see this styled text, your setup is correct 🎉
        </p>

        <div className="flex flex-col gap-4 p-6">
          <Button label="Primary Action" onClick={() => alert("Clicked!")} />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
          <Button label="Outline" variant="outline" />
        </div>
      </div>
    </main>
  );
}
