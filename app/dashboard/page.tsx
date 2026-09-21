import type { Metadata } from "next";
import Link from "next/link";
import { tasks } from "@/lib/tasks";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of the Task Management Dashboard.",
};

export default function DashboardPage() {
  const totalTasks = tasks.length;

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Task Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Overview of your tasks and their current status.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Tasks
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalTasks}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            To Do
          </p>

          <p className="mt-2 text-3xl font-bold">
            {todoTasks}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            In Progress
          </p>

          <p className="mt-2 text-3xl font-bold">
            {inProgressTasks}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <p className="mt-2 text-3xl font-bold">
            {doneTasks}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Manage Your Tasks
        </h2>

        <p className="mt-2 text-gray-600">
          View, search, filter, or create tasks from the task list.
        </p>

        <Link
          href="/dashboard/tasks"
          className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          View Tasks
        </Link>
      </div>
    </div>
  );
}