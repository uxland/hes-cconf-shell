import { bootstrapPlugins, PluginDefinition } from "@uxland/harmonix";
import { IHESCConfSection } from "../../domain/model";
import { getConfigurations } from "../get-configurations/get-configurations";
import { hesCConfApiFactory } from "../../api/api";

const buildHarmonixPlugins = (configurations: IHESCConfSection[]) => { 
  const plugins = configurations
    .map((c) => c.plugins)
    .flat()
    .map((p) => {
      return {
        pluginId: p.pluginId,
        importer: ()=>import(p.pluginUrl),
      };
    });
  return plugins;
}

export const runConfigurations = async () => {
  const configurations = await getConfigurations();
  const plugins = buildHarmonixPlugins(configurations) as PluginDefinition[];
  await bootstrapPlugins(plugins, hesCConfApiFactory);
  return configurations;
};
