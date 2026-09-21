import Link from "next/link";
import { tasks } from "@/lib/tasks";
import TaskList from "@/components/TaskList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
  description: "View, search, filter, and manage tasks.",
};

export default function TasksPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>

          <p className="mt-2 text-gray-600">
            Search, filter, and view your tasks.
          </p>
        </div>

        <Link
          href="/dashboard/tasks/new"
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Add Task
        </Link>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
}