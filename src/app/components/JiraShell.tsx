import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Code2,
  Clock3,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  List,
  Menu,
  PanelLeft,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CreateIssueButton } from "./CreateIssueButton";

type SidebarItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type JiraShellProps = {
  activePath: string;
  children: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  { label: "Timeline", href: "/timeline", icon: Clock3 },
  { label: "Backlog", href: "/backlog", icon: List },
  { label: "Board", href: "/board", icon: LayoutDashboard },
  { label: "Reports", href: "/reports", icon: Inbox },
  { label: "Code", href: "/code", icon: Code2 },
];

const projectLinks: SidebarItem[] = [
  { label: "Project settings", href: "/project-settings", icon: Settings },
];

export function JiraShell({ activePath, children }: JiraShellProps) {
  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#172b4d]">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[#dfe1e6] bg-white px-4 shadow-sm">
        <div className="flex min-w-0 items-center gap-3">
          <button className="grid size-9 place-items-center rounded text-[#44546f] hover:bg-[#f1f2f4]" aria-label="Open menu">
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <Link className="flex items-center gap-2 font-semibold text-[#172b4d]" href="/board">
            <span className="grid size-7 place-items-center rounded bg-[#0052cc] text-white">
              <Zap className="size-4" aria-hidden="true" />
            </span>
            Jira
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-medium text-[#44546f] lg:flex">
            {["Your work", "Projects", "Filters", "Dashboards", "Teams", "Apps"].map((item) => (
              <button className="flex h-9 items-center gap-1 rounded px-3 hover:bg-[#f1f2f4]" key={item}>
                {item}
                <ChevronDown className="size-3.5" aria-hidden="true" />
              </button>
            ))}
          </nav>
          <CreateIssueButton className="hidden md:inline-flex" />
        </div>

        <div className="flex items-center gap-2">
          <label className="hidden h-9 w-64 items-center gap-2 rounded border border-[#dfe1e6] bg-white px-3 text-sm text-[#626f86] md:flex">
            <Search className="size-4" aria-hidden="true" />
            <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#626f86]" placeholder="Search" />
          </label>
          {[Bell, HelpCircle, Settings].map((Icon, index) => (
            <button className="grid size-9 place-items-center rounded text-[#44546f] hover:bg-[#f1f2f4]" key={index} aria-label="Header action">
              <Icon className="size-5" aria-hidden="true" />
            </button>
          ))}
          <span className="grid size-8 place-items-center rounded-full bg-[#0747a6] text-xs font-bold text-white">MR</span>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-56px)] lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-[#dfe1e6] bg-white lg:block">
          <div className="border-b border-[#dfe1e6] p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded bg-[#e9f2ff] text-sm font-bold text-[#0052cc]">S</div>
              <div className="min-w-0">
                <h1 className="truncate text-sm font-semibold text-[#172b4d]">SCRUM</h1>
                <p className="truncate text-xs text-[#626f86]">Software project</p>
              </div>
              <button className="ml-auto grid size-8 place-items-center rounded hover:bg-[#f1f2f4]" aria-label="Collapse sidebar">
                <PanelLeft className="size-4 text-[#44546f]" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className="p-3">
            {sidebarItems.map((item) => (
              <Link
                className={`mb-1 flex h-9 items-center gap-3 rounded px-3 text-sm font-medium ${
                  activePath === item.href ? "bg-[#e9f2ff] text-[#0052cc]" : "text-[#44546f] hover:bg-[#f1f2f4]"
                }`}
                href={item.href}
                key={item.href}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-[#dfe1e6] p-3">
            {projectLinks.map((item) => (
              <Link
                className={`mb-1 flex h-8 items-center gap-3 rounded px-3 text-sm ${
                  activePath === item.href ? "bg-[#e9f2ff] font-medium text-[#0052cc]" : "text-[#44546f] hover:bg-[#f1f2f4]"
                }`}
                href={item.href}
                key={item.href}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {children}
      </div>
    </main>
  );
}
