import { selectableAdapterFactory as factory, regionAdapterRegistry } from "@uxland/regions";
import { HesSettingsCenterShell } from "./UI/components/shell/shell";

export const initializeShell = async (element: HTMLElement) => {
  regionAdapterRegistry.registerAdapterFactory("content-switcher", factory);
  const shell = new HesSettingsCenterShell();
  element.appendChild(shell as any);
};
