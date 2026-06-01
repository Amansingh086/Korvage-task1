import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";

export default function ProjectSettingsPage() {
  return (
    <JiraShell activePath="/project-settings">
      <ProjectPage
        activeLabel="Project settings"
        cards={["Issue types and workflows", "Access and permissions", "Notifications and automation"]}
        description="Manage SCRUM project configuration, permissions, workflow behavior, and team preferences."
        eyebrow="Administration"
        title="Project settings"
      />
    </JiraShell>
  );
}
