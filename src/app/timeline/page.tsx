"use client";

import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function TimelinePage() {
  return (
    <ProtectedRoute>
      <JiraShell activePath="/timeline">
        <ProjectPage
          activeLabel="Timeline"
          cards={["Plan profile release milestone", "Schedule signup validation work", "Map sprint review checkpoint"]}
          description="Visualize SCRUM project work across sprint milestones, dependencies, and delivery dates."
          eyebrow="Roadmap"
          title="Timeline"
        />
      </JiraShell>
    </ProtectedRoute>
  );
}
