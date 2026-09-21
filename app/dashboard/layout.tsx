import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
          <Link
            href="/dashboard"
            className="font-bold text-xl"
          >
            Task Manager
          </Link>

          <Link
            href="/dashboard/tasks"
            className="text-gray-600 hover:text-black"
          >
            Tasks
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}