"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { tasks } from "@/lib/tasks";
import { TaskPriority } from "@/types/task";

export async function addTask(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const priority = formData.get("priority")?.toString() as TaskPriority;

  if (!title || !description || !priority) {
    throw new Error("All fields are required.");
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: "todo" as const,
    priority,
  };

  tasks.push(newTask);

  revalidatePath("/dashboard/tasks");

  redirect("/dashboard/tasks");
}