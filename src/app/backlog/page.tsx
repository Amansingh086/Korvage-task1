import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";

export default function BacklogPage() {
  return (
    <JiraShell activePath="/backlog">
      <ProjectPage
        activeLabel="Backlog"
        cards={["Refine authentication edge cases", "Prioritize dashboard widgets", "Estimate mobile board polish"]}
        description="Review upcoming issues, refine scope, estimate work, and prepare the next sprint."
        eyebrow="Planning"
        title="Backlog"
      />
    </JiraShell>
  );
}
