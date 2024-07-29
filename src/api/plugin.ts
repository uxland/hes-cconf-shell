import { bootstrapPlugins as pluginBootstrapper } from "@uxland/harmonix";
import type { PluginDefinition, Plugin as PluginType } from "@uxland/harmonix";
export type { PluginDefinition, PluginInfo } from "@uxland/harmonix";
import { HesCConfApi, hesCConfApiFactory } from "./api";

export const bootstrapPlugins = (plugins: PluginDefinition[]) =>
  pluginBootstrapper(plugins, hesCConfApiFactory);

export type Plugin = PluginType<HesCConfApi>;
