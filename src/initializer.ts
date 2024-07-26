import { selectableAdapterFactory as factory, regionAdapterRegistry } from "@uxland/regions";
import { shellApi } from "./api/api";
import { initializeLocalization } from "./locales";
import { HesSettingsCenterShell } from "./UI/components/shell/shell";

export const initializeShell = async (element: HTMLElement) => {
  initializeLocalization(shellApi);
  regionAdapterRegistry.registerAdapterFactory("content-switcher", factory);
  const shell = new HesSettingsCenterShell();
  element.appendChild(shell as any);
};
