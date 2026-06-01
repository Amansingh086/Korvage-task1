import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CreatedTask = {
  id: string;
  title: string;
  description: string;
  assignee: string;
  startDate: string;
  endDate: string;
  createdAt: string;
};

type TasksState = {
  tasks: CreatedTask[];
};

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CreatedTask>) => {
      state.tasks.unshift(action.payload);
    },
    setTasks: (state, action: PayloadAction<CreatedTask[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, setTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
