import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4 text-gray-600">Could not find requested resource</p>
      <Link
        href="/"
        className="text-blue-600 hover:underline font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
