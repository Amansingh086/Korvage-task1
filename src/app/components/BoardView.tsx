"use client";

import {
  CircleUserRound,
  Ellipsis,
  Filter,
  Lock,
  MessageSquare,
  MoreHorizontal,
  Search,
  Share2,
  Star,
} from "lucide-react";
import { CreateIssueButton } from "./CreateIssueButton";
import { useAppSelector } from "../store/hooks";

type Issue = {
  key: string;
  title: string;
  type: "story" | "task" | "bug";
  points?: number;
  priority: "low" | "medium" | "high";
  assignee: string;
  comments?: number;
};

type BoardColumn = {
  title: string;
  count: number;
  issues: Issue[];
};

const boardColumns: BoardColumn[] = [
  {
    title: "TO DO",
    count: 5,
    issues: [
      { key: "SCRUM-1", title: "Update user profile page layout", type: "story", points: 3, priority: "medium", assignee: "AR", comments: 2 },
      { key: "SCRUM-2", title: "Add validation to signup form", type: "task", points: 2, priority: "low", assignee: "SR" },
      { key: "SCRUM-3", title: "Create empty state for sprint board", type: "story", points: 5, priority: "medium", assignee: "MP" },
    ],
  },
  {
    title: "IN PROGRESS",
    count: 3,
    issues: [
      { key: "SCRUM-4", title: "Implement project sidebar navigation", type: "task", points: 3, priority: "high", assignee: "AM", comments: 4 },
      { key: "SCRUM-5", title: "Connect sprint metrics with dashboard", type: "story", points: 8, priority: "medium", assignee: "PS" },
    ],
  },
  {
    title: "IN REVIEW",
    count: 2,
    issues: [{ key: "SCRUM-6", title: "Fix issue card spacing on mobile", type: "bug", points: 1, priority: "high", assignee: "NJ", comments: 1 }],
  },
  {
    title: "DONE",
    count: 4,
    issues: [
      { key: "SCRUM-7", title: "Set up project permissions", type: "task", points: 2, priority: "low", assignee: "SK" },
      { key: "SCRUM-8", title: "Design compact header controls", type: "story", points: 3, priority: "medium", assignee: "VR" },
    ],
  },
];

function IssueTypeIcon({ type }: { type: Issue["type"] }) {
  const styles: Record<Issue["type"], string> = {
    story: "bg-[#36b37e]",
    task: "bg-[#4c9aff]",
    bug: "bg-[#ff5630]",
  };

  return <span className={`size-4 rounded-sm ${styles[type]}`} aria-label={type} />;
}

function PriorityIcon({ priority }: { priority: Issue["priority"] }) {
  const styles: Record<Issue["priority"], string> = {
    low: "border-b-[#36b37e]",
    medium: "border-b-[#ffab00]",
    high: "border-b-[#de350b]",
  };

  return <span className={`h-0 w-0 border-x-[5px] border-b-[9px] border-x-transparent ${styles[priority]}`} aria-label={`${priority} priority`} />;
}

export function BoardView() {
  const createdTasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <section className="min-w-0 p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#626f86]">
        <span>Projects</span>
        <span>/</span>
        <span>SCRUM</span>
        <span>/</span>
        <span className="text-[#172b4d]">Board</span>
      </div>

      <div className="mb-5 flex flex-col justify-between gap-4 xl:flex-row xl:items-start">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-normal text-[#172b4d] sm:text-3xl">SCRUM board</h2>
            <button className="grid size-8 place-items-center rounded text-[#626f86] hover:bg-[#f1f2f4]" aria-label="Favorite project">
              <Star className="size-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-1 text-sm text-[#626f86]">Sprint 1 - active sprint board</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded border border-[#dfe1e6] bg-white px-3 text-sm font-medium text-[#172b4d] hover:bg-[#f1f2f4]">
            <Share2 className="size-4" aria-hidden="true" />
            Share
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded border border-[#dfe1e6] bg-white px-3 text-sm font-medium text-[#172b4d] hover:bg-[#f1f2f4]">
            <Ellipsis className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex h-9 w-full items-center gap-2 rounded border border-[#dfe1e6] bg-white px-3 text-sm text-[#626f86] sm:w-72">
            <Search className="size-4" aria-hidden="true" />
            <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#626f86]" placeholder="Search board" />
          </label>
          <div className="flex -space-x-2">
            {["MR", "AR", "PS", "NJ"].map((initials) => (
              <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#cce0ff] text-xs font-bold text-[#0747a6]" key={initials}>
                {initials}
              </span>
            ))}
          </div>
          <button className="inline-flex h-9 items-center gap-2 rounded px-3 text-sm font-medium text-[#44546f] hover:bg-[#f1f2f4]">
            <Filter className="size-4" aria-hidden="true" />
            Quick filters
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded px-3 text-sm font-medium text-[#44546f] hover:bg-[#f1f2f4]">
            <Lock className="size-4" aria-hidden="true" />
            Only my issues
          </button>
        </div>

        <button className="inline-flex h-9 items-center justify-center gap-2 rounded bg-[#0052cc] px-4 text-sm font-semibold text-white hover:bg-[#0747a6]">
          Complete sprint
        </button>
      </div>

      <div className="mb-3 rounded border border-[#dfe1e6] bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#172b4d]">Sprint 1</h3>
            <p className="mt-1 text-xs text-[#626f86]">15 issues | 23 story points | 14 days remaining</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#44546f]">
            <span className="rounded bg-[#e9f2ff] px-2 py-1 text-[#0052cc]">Active</span>
            <span>June 1 - June 14</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 overflow-x-auto pb-4 xl:grid-cols-4">
        {boardColumns.map((column) => (
          <section className="min-w-[280px] rounded bg-[#f1f2f4]" key={column.title}>
            <div className="flex h-11 items-center justify-between px-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold tracking-wide text-[#44546f]">{column.title}</h3>
                <span className="text-xs font-semibold text-[#626f86]">{column.count}</span>
              </div>
              <button className="grid size-7 place-items-center rounded hover:bg-[#dfe1e6]" aria-label={`${column.title} column menu`}>
                <MoreHorizontal className="size-4 text-[#626f86]" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-2 px-2 pb-2">
              {column.title === "TO DO"
                ? createdTasks.map((task) => (
                    <article className="rounded border border-[#dfe1e6] bg-white p-3 shadow-sm transition hover:bg-[#fafbfc] hover:shadow-md" key={task.id}>
                      <p className="mb-2 text-sm font-medium leading-5 text-[#172b4d]">{task.title}</p>
                      <p className="mb-4 line-clamp-2 text-xs leading-5 text-[#626f86]">{task.description}</p>
                      <div className="mb-3 rounded bg-[#f7f8f9] px-2 py-1 text-xs text-[#44546f]">
                        {task.startDate} to {task.endDate}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <IssueTypeIcon type="task" />
                          <span className="text-xs font-semibold text-[#626f86]">{task.id.replace("SCRUM-", "NEW-")}</span>
                          <PriorityIcon priority="medium" />
                        </div>
                        <span className="grid size-6 place-items-center rounded-full bg-[#deebff] text-[10px] font-bold text-[#0747a6]">
                          {task.assignee
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    </article>
                  ))
                : null}

              {column.issues.map((issue) => (
                <article className="rounded border border-[#dfe1e6] bg-white p-3 shadow-sm transition hover:bg-[#fafbfc] hover:shadow-md" key={issue.key}>
                  <p className="mb-4 text-sm font-medium leading-5 text-[#172b4d]">{issue.title}</p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <IssueTypeIcon type={issue.type} />
                      <span className="text-xs font-semibold text-[#626f86]">{issue.key}</span>
                      <PriorityIcon priority={issue.priority} />
                      {typeof issue.points === "number" ? (
                        <span className="grid size-5 place-items-center rounded-full bg-[#dfe1e6] text-[11px] font-bold text-[#44546f]">{issue.points}</span>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-2">
                      {issue.comments ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-[#626f86]">
                          <MessageSquare className="size-3.5" aria-hidden="true" />
                          {issue.comments}
                        </span>
                      ) : null}
                      <span className="grid size-6 place-items-center rounded-full bg-[#deebff] text-[10px] font-bold text-[#0747a6]">{issue.assignee}</span>
                    </div>
                  </div>
                </article>
              ))}

              <CreateIssueButton label="Create issue" variant="ghost" />
            </div>
          </section>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded border border-[#dfe1e6] bg-white px-4 py-3 text-sm text-[#626f86]">
        <span>Board data shown for SCRUM project</span>
        <div className="flex items-center gap-2">
          <CircleUserRound className="size-4" aria-hidden="true" />
          <span>Managed by Manraj</span>
        </div>
      </div>
    </section>
  );
}
