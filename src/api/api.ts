import {
  ApiFactory,
  HarmonixApi,
  IRegionManager,
  PluginInfo,
  createRegionHost,
  createRegionManager,
} from "@uxland/harmonix";
import { HesCConfRegionManager as HesCConfRegionManager, createRegionManagerProxy } from "./regions/region-manager";
import { HesCConfShellId } from "../constants";

export interface HesCConfApi extends HarmonixApi {
  regionManager: HesCConfRegionManager;
}

const regionManager: IRegionManager = createRegionManager("hes-settings-center");
export const HesCConfRegionHost: any = createRegionHost(regionManager as any);

/**
 * Factory function that creates a Hes Settings Center API instance.
 *
 * @param {PluginInfo} pluginInfo - Information about the plugin
 * @return {HesCConfApi} The created Hes Settings Center API instance
 */
export const hesCConfApiFactory: ApiFactory<HesCConfApi> = (
  pluginInfo: PluginInfo,
): HesCConfApi => {
  return {
    pluginInfo: pluginInfo,
    regionManager: createRegionManagerProxy(pluginInfo, regionManager),
    createLocaleManager: null as any
  };
};

export const shellApi = hesCConfApiFactory({ pluginId: HesCConfShellId }) as HesCConfApi;
