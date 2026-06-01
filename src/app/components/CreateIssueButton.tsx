"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarDays, Plus, X } from "lucide-react";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/tasksSlice";
import type { CreatedTask } from "../store/tasksSlice";

type CreateIssueButtonProps = {
  label?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CreateIssueButton({
  label = "Create",
  variant = "primary",
  className = "",
}: CreateIssueButtonProps) {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("Manraj Rajput");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const baseClass =
    variant === "primary"
      ? "inline-flex h-9 items-center justify-center gap-2 rounded bg-[#0052cc] px-4 text-sm font-semibold text-white hover:bg-[#0747a6]"
      : "flex h-10 w-full items-center gap-2 rounded px-2 text-sm font-medium text-[#44546f] hover:bg-[#dfe1e6]";

  function resetForm() {
    setTitle("");
    setDescription("");
    setAssignee("Manraj Rajput");
    setStartDate("");
    setEndDate("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: CreatedTask = {
      id: `SCRUM-${Date.now()}`,
      title,
      description,
      assignee,
      startDate,
      endDate,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTask(task));
    resetForm();
    setIsOpen(false);
  }

  return (
    <>
      <button className={`${baseClass} ${className}`} onClick={() => setIsOpen(true)} type="button">
        <Plus className="size-4" aria-hidden="true" />
        {label}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#091e42]/54 px-4 py-6">
          <div className="w-full max-w-2xl rounded bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#dfe1e6] px-6 py-4">
              <div>
                <h2 className="text-xl font-semibold text-[#172b4d]">Create issue</h2>
                <p className="mt-1 text-sm text-[#626f86]">Add a new task to the SCRUM project.</p>
              </div>
              <button
                className="grid size-9 place-items-center rounded text-[#44546f] hover:bg-[#f1f2f4]"
                onClick={() => setIsOpen(false)}
                type="button"
                aria-label="Close create issue form"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <form className="space-y-5 px-6 py-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#172b4d]">Title</span>
                <input
                  className="h-10 w-full rounded border border-[#dfe1e6] px-3 text-sm text-[#172b4d] outline-none transition focus:border-[#0052cc] focus:ring-2 focus:ring-[#deebff]"
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Enter task title"
                  required
                  type="text"
                  value={title}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#172b4d]">Description</span>
                <textarea
                  className="min-h-28 w-full resize-none rounded border border-[#dfe1e6] px-3 py-2 text-sm text-[#172b4d] outline-none transition focus:border-[#0052cc] focus:ring-2 focus:ring-[#deebff]"
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the work, acceptance criteria, or important notes"
                  required
                  value={description}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#172b4d]">Assign task</span>
                  <select
                    className="h-10 w-full rounded border border-[#dfe1e6] bg-white px-3 text-sm text-[#172b4d] outline-none transition focus:border-[#0052cc] focus:ring-2 focus:ring-[#deebff]"
                    onChange={(event) => setAssignee(event.target.value)}
                    value={assignee}
                  >
                    <option>Manraj Rajput</option>
                    <option>Hardik</option>
                    <option>Project Team</option>
                    <option>Unassigned</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#172b4d]">Start date</span>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#626f86]" aria-hidden="true" />
                    <input
                      className="h-10 w-full rounded border border-[#dfe1e6] px-3 pl-9 text-sm text-[#172b4d] outline-none transition focus:border-[#0052cc] focus:ring-2 focus:ring-[#deebff]"
                      onChange={(event) => setStartDate(event.target.value)}
                      required
                      type="date"
                      value={startDate}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#172b4d]">End date</span>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#626f86]" aria-hidden="true" />
                    <input
                      className="h-10 w-full rounded border border-[#dfe1e6] px-3 pl-9 text-sm text-[#172b4d] outline-none transition focus:border-[#0052cc] focus:ring-2 focus:ring-[#deebff]"
                      onChange={(event) => setEndDate(event.target.value)}
                      required
                      type="date"
                      value={endDate}
                    />
                  </div>
                </label>
              </div>

              <div className="flex justify-end gap-3 border-t border-[#dfe1e6] pt-5">
                <button
                  className="h-9 rounded px-4 text-sm font-semibold text-[#44546f] hover:bg-[#f1f2f4]"
                  onClick={() => {
                    resetForm();
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  Cancel
                </button>
                <button className="h-9 rounded bg-[#0052cc] px-4 text-sm font-semibold text-white hover:bg-[#0747a6]" type="submit">
                  Create task
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
