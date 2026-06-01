"use client";

import { Search } from "lucide-react";
import { CreateIssueButton } from "./CreateIssueButton";
import { useAppSelector } from "../store/hooks";

type ProjectPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  activeLabel: string;
  cards: string[];
};

export function ProjectPage({ eyebrow, title, description, activeLabel, cards }: ProjectPageProps) {
  const createdTasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <section className="min-w-0 p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#626f86]">
        <span>Projects</span>
        <span>/</span>
        <span>SCRUM</span>
        <span>/</span>
        <span className="text-[#172b4d]">{activeLabel}</span>
      </div>

      <div className="mb-6 flex flex-col justify-between gap-4 xl:flex-row xl:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#626f86]">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[#172b4d] sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#626f86]">{description}</p>
        </div>
        <CreateIssueButton />
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <label className="flex h-9 w-full items-center gap-2 rounded border border-[#dfe1e6] bg-white px-3 text-sm text-[#626f86] sm:w-72">
          <Search className="size-4" aria-hidden="true" />
          <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#626f86]" placeholder={`Search ${activeLabel.toLowerCase()}`} />
        </label>
        {["MR", "AR", "PS"].map((initials) => (
          <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#cce0ff] text-xs font-bold text-[#0747a6]" key={initials}>
            {initials}
          </span>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {createdTasks.map((task) => (
          <article className="rounded border border-[#dfe1e6] bg-white p-4 shadow-sm" key={task.id}>
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded bg-[#e9f2ff] px-2 py-1 text-xs font-bold text-[#0052cc]">NEW TASK</span>
              <span className="grid size-7 place-items-center rounded-full bg-[#deebff] text-[10px] font-bold text-[#0747a6]">
                {task.assignee
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
            <h3 className="text-sm font-semibold leading-5 text-[#172b4d]">{task.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#626f86]">{task.description}</p>
            <div className="mt-4 rounded bg-[#f7f8f9] px-3 py-2 text-xs font-medium text-[#44546f]">
              {task.startDate} to {task.endDate}
            </div>
          </article>
        ))}

        {cards.map((card, index) => (
          <article className="rounded border border-[#dfe1e6] bg-white p-4 shadow-sm" key={card}>
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded bg-[#e9f2ff] px-2 py-1 text-xs font-bold text-[#0052cc]">SCRUM-{index + 11}</span>
              <span className="grid size-7 place-items-center rounded-full bg-[#deebff] text-[10px] font-bold text-[#0747a6]">{["MR", "AR", "PS"][index % 3]}</span>
            </div>
            <h3 className="text-sm font-semibold leading-5 text-[#172b4d]">{card}</h3>
            <p className="mt-3 text-sm leading-6 text-[#626f86]">
              Routed page content for this Jira project area, styled to match the SCRUM workspace.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
