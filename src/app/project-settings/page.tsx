"use client";

import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function ProjectSettingsPage() {
  return (
    <ProtectedRoute>
      <JiraShell activePath="/project-settings">
        <ProjectPage
          activeLabel="Project settings"
          cards={["Issue types and workflows", "Access and permissions", "Notifications and automation"]}
          description="Manage SCRUM project configuration, permissions, workflow behavior, and team preferences."
          eyebrow="Administration"
          title="Project settings"
        />
      </JiraShell>
    </ProtectedRoute>
  );
}
