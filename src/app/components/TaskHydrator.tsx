"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTasks } from "../store/tasksSlice";
import type { CreatedTask } from "../store/tasksSlice";

const TASK_STORAGE_KEY = "jira-created-tasks";

function loadTasks(): CreatedTask[] {
  const storedTasks = window.localStorage.getItem(TASK_STORAGE_KEY);

  if (!storedTasks) {
    return [];
  }

  try {
    return JSON.parse(storedTasks) as CreatedTask[];
  } catch {
    return [];
  }
}

export function TaskHydrator() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(setTasks(loadTasks()));
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return null;
}
