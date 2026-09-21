import Link from "next/link";
import { addTask } from "@/lib/actions";

export default function NewTaskPage() {
  return (
    <div className="max-w-2xl">
      <Link
        href="/dashboard/tasks"
        className="text-sm text-gray-600 hover:text-black"
      >
        ← Back to Tasks
      </Link>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Add Task</h1>

        <p className="mt-2 text-gray-600">
          Create a new task.
        </p>
      </div>

      <form
        action={addTask}
        className="mt-6 space-y-5 rounded-lg border bg-white p-6 shadow-sm"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-2 block font-medium"
          >
            Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-medium"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter task description"
          />
        </div>

        <div>
          <label
            htmlFor="priority"
            className="mb-2 block font-medium"
          >
            Priority
          </label>

          <select
            id="priority"
            name="priority"
            required
            className="w-full rounded-lg border bg-white px-4 py-2"
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}