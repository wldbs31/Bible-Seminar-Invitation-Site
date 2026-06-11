import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Bible-Seminar-Invitation-Site/",
  plugins: [react()],
  server: {
    watch: {
      // This project lives in iCloud Drive, which constantly re-touches files
      // to sync them. That churn makes Vite think vite.config.js / .env keep
      // "changing" and triggers an endless server-restart loop. Tell the
      // watcher to ignore the files iCloud keeps poking so the dev server
      // stops restarting itself. (Edits to these files won't auto-restart the
      // server anymore — stop and re-run `npm run dev` after changing them.)
      ignored: [
        "**/.git/**",
        "**/node_modules/**",
        "**/.DS_Store",
        "**/*.icloud",
        "**/.env",
        "**/vite.config.js",
      ],
    },
  },
});
