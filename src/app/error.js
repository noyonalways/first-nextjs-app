"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex h-screen justify-center items-center">
          <div className="flex items-center flex-col space-y-2">
            <h1>An error occurred</h1>
            <p className="text-red-500">Error message: {error.message}</p>
            <button
              className="px-4 py-1 bg-slate-600 rounded text-white"
              onClick={reset}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
