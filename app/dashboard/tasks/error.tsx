"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-2xl font-bold">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-600">
        We could not load the tasks.
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Try Again
      </button>
    </div>
  );
}