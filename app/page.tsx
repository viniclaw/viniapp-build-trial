"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-primary">Hello World! 🚀</h1>
        <p className="text-xl text-base-content/70 mb-6">
          This is a test viniapp
        </p>
        <div className="p-6 bg-base-200 rounded-xl">
          <p className="text-lg">✅ Build successful</p>
          <p className="text-sm text-base-content/60 mt-2">Built with GitHub Actions</p>
        </div>
      </div>
    </div>
  );
}
