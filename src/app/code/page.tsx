"use client";

import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function CodePage() {
  return (
    <ProtectedRoute>
      <JiraShell activePath="/code">
        <ProjectPage
          activeLabel="Code"
          cards={["Link pull requests", "Review deployment activity", "Connect repository branches"]}
          description="Connect development activity with Jira issues, branches, commits, pull requests, and deployments."
          eyebrow="Development"
          title="Code"
        />
      </JiraShell>
    </ProtectedRoute>
  );
}
