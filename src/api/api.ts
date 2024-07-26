import {
  ApiFactory,
  HarmonixApi,
  IRegionManager,
  PluginInfo,
  createRegionHost,
  createRegionManager,
} from "@uxland/harmonix";
import { HesSettingsCenterRegionManager, createRegionManagerProxy } from "./regions/region-manager";
import { hesSettingsCenterShellId } from "../constants";

export interface HesSettingsCenterApi extends HarmonixApi {
  regionManager: HesSettingsCenterRegionManager;
}

const regionManager: IRegionManager = createRegionManager("hes-settings-center");
export const HesSettingsCenterRegionHost: any = createRegionHost(regionManager as any);

/**
 * Factory function that creates a Hes Settings Center API instance.
 *
 * @param {PluginInfo} pluginInfo - Information about the plugin
 * @return {HesSettingsCenterApi} The created Hes Settings Center API instance
 */
export const hesSettingsCenterApiFactory: ApiFactory<HesSettingsCenterApi> = (
  pluginInfo: PluginInfo,
): HesSettingsCenterApi => {
  return {
    pluginInfo: pluginInfo,
    regionManager: createRegionManagerProxy(pluginInfo, regionManager),
    createLocaleManager: null as any
  };
};

export const shellApi = hesSettingsCenterApiFactory({ pluginId: hesSettingsCenterShellId }) as HesSettingsCenterApi;
