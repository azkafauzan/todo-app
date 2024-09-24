-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_task_lists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "taskId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "task_lists_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_task_lists" ("createdAt", "id", "taskId", "title", "updatedAt") SELECT "createdAt", "id", "taskId", "title", "updatedAt" FROM "task_lists";
DROP TABLE "task_lists";
ALTER TABLE "new_task_lists" RENAME TO "task_lists";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
