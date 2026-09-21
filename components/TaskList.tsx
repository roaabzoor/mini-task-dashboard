"use client";

import { useState } from "react";
import Link from "next/link";
import { Task, TaskStatus } from "@/types/task";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<TaskStatus | "all">("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "all" || task.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-black"
        />

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as TaskStatus | "all")
          }
          className="rounded-lg border bg-white px-4 py-2"
        >
          <option value="all">All Statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Link
              key={task.id}
              href={`/dashboard/tasks/${task.id}`}
              className="block rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {task.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {task.description}
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize">
                  {task.status}
                </span>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Priority:{" "}
                <span className="font-medium capitalize">
                  {task.priority}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="rounded-lg border bg-white p-5 text-gray-500">
            No tasks found.
          </p>
        )}
      </div>
    </div>
  );
}