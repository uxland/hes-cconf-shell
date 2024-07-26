import { bootstrapPlugins, PluginDefinition } from "@uxland/harmonix";
import { IHESConfigurationItem } from "../../domain/model";
import { getConfigurations } from "../get-configurations/get-configurations";
import { hesSettingsCenterApiFactory } from "../../api/api";

const buildHarmonixPlugins = (configurations: IHESConfigurationItem[]) => { 
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
  await bootstrapPlugins(plugins, hesSettingsCenterApiFactory);
  return configurations;
};
