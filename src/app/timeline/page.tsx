import { JiraShell } from "../components/JiraShell";
import { ProjectPage } from "../components/ProjectPage";

export default function TimelinePage() {
  return (
    <JiraShell activePath="/timeline">
      <ProjectPage
        activeLabel="Timeline"
        cards={["Plan profile release milestone", "Schedule signup validation work", "Map sprint review checkpoint"]}
        description="Visualize SCRUM project work across sprint milestones, dependencies, and delivery dates."
        eyebrow="Roadmap"
        title="Timeline"
      />
    </JiraShell>
  );
}
