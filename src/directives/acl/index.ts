/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-auth="RoleEnum.TEST"
 */
import type { App, Directive, DirectiveBinding } from "vue";

// import { usePermission } from "@/hooks/usePermission";

function isAuth(el: Element, binding: DirectiveBinding<any>) {
  //   const { hasPermission } = usePermission();

  const value = binding.value;
  if (!value) return;
  //   if (!hasPermission(value)) {
  //     el.parentNode?.removeChild(el);
  //   }
  if (!false) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted,
};

export function setupPermissionDirective(app: App) {
  app.directive("acl", authDirective);
}

export default authDirective;
