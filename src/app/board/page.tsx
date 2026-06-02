"use client";

import { BoardView } from "../components/BoardView";
import { JiraShell } from "../components/JiraShell";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function BoardPage() {
  return (
    <ProtectedRoute>
      <JiraShell activePath="/board">
        <BoardView />
      </JiraShell>
    </ProtectedRoute>
  );
}
