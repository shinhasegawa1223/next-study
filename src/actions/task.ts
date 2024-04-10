"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formDate: FormData) => {
  const newTask: Task = {
    title: formDate.get("title") as string,
    description: formDate.get("description") as string,
    dueDate: formDate.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "task failed";
    return state;
  }
  //   try cath の外で
  redirect("/");
};
