import { Task } from "@/types/task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Learn Next.js App Router",
    description:
      "Understand pages, layouts, routing, and the Next.js App Router.",
    status: "in-progress",
    priority: "high",
  },
  {
    id: 2,
    title: "Build Task Dashboard",
    description:
      "Create the main dashboard page and display task information.",
    status: "todo",
    priority: "high",
  },
  {
    id: 3,
    title: "Practice TypeScript",
    description:
      "Use interfaces and types to make the application type-safe.",
    status: "done",
    priority: "medium",
  },
  {
    id: 4,
    title: "Add Search and Filters",
    description:
      "Allow users to search tasks and filter them by their status.",
    status: "todo",
    priority: "medium",
  },
  {
    id: 5,
    title: "Deploy Application",
    description:
      "Deploy the finished Next.js application to Vercel.",
    status: "todo",
    priority: "low",
  },
];