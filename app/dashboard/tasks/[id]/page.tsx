import Link from "next/link";
import { notFound } from "next/navigation";
import { tasks } from "@/lib/tasks";

type TaskDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TaskDetailsPage({
  params,
}: TaskDetailsPageProps) {
  const { id } = await params;

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/dashboard/tasks"
        className="text-sm text-gray-600 hover:text-black"
      >
        ← Back to Tasks
      </Link>

      <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold">{task.title}</h1>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize">
            {task.status}
          </span>
        </div>

        <p className="mt-4 text-gray-600">
          {task.description}
        </p>

        <div className="mt-6 border-t pt-4">
          <p>
            <span className="font-semibold">Task ID:</span> {task.id}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Status:</span>{" "}
            <span className="capitalize">{task.status}</span>
          </p>

          <p className="mt-2">
            <span className="font-semibold">Priority:</span>{" "}
            <span className="capitalize">{task.priority}</span>
          </p>
        </div>
      </div>
    </div>
  );
}