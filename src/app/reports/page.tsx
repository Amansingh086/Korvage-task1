"use client";

import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <JiraShell activePath="/reports">
        <ProjectPage
          activeLabel="Reports"
          cards={["Sprint burndown report", "Velocity chart", "Cumulative flow diagram"]}
          description="Track progress, team capacity, cycle time, and sprint health from project reports."
          eyebrow="Insights"
          title="Reports"
        />
      </JiraShell>
    </ProtectedRoute>
  );
}
