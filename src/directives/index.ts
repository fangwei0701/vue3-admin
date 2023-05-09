import type { App } from "vue";
import { setupPermissionDirective } from "./acl/index";

export function setupGlobDirectives(app: App) {
  setupPermissionDirective(app);
}
