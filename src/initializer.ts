import { selectableAdapterFactory as factory, regionAdapterRegistry } from "@uxland/regions";
import { HesCConfShell } from "./UI/views/shell/shell";
import { IHESCConfSection } from "./domain/model";

export const initializeShell = async (element: HTMLElement,configurationSections: IHESCConfSection[]) => {
  regionAdapterRegistry.registerAdapterFactory("content-switcher", factory);
  const shell = new HesCConfShell();
  shell.configurationSections = configurationSections;
  element.appendChild(shell as any);
};

