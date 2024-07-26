import { bootstrapPlugins as pluginBootstrapper } from "@uxland/harmonix";
import type { PluginDefinition, Plugin as PluginType } from "@uxland/harmonix";
export type { PluginDefinition, PluginInfo } from "@uxland/harmonix";
import { HesSettingsCenterApi, hesSettingsCenterApiFactory } from "./api";

export const bootstrapPlugins = (plugins: PluginDefinition[]) =>
  pluginBootstrapper(plugins, hesSettingsCenterApiFactory);

export type Plugin = PluginType<HesSettingsCenterApi>;
