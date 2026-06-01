import { BoardView } from "../components/BoardView";
import { JiraShell } from "../components/JiraShell";

export default function BoardPage() {
  return (
    <JiraShell activePath="/board">
      <BoardView />
    </JiraShell>
  );
}
