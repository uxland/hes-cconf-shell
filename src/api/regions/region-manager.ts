import { HarmonixRegionManager, IRegionManager, HarmonixViewDefinition } from "@uxland/harmonix";
import { PluginInfo } from "../plugin";
import { IRegion } from "@uxland/regions";
import { shellRegions } from "./regions";

export interface HesCConfRegionManager extends HarmonixRegionManager {
  registerMenu(view: HarmonixViewDefinition): Promise<void>;
  registerQuickAction(view: HarmonixViewDefinition): Promise<void>;
  registerMainView(view: HarmonixViewDefinition, title: string): Promise<void>;
  activateMainView(viewId: string): Promise<void>;
}

class RegionManagerProxy implements HesCConfRegionManager {
  constructor(
    private pluginInfo: PluginInfo,
    private regionManager: IRegionManager,
  ) {}
  /**
   * Register a view in a specific region.
   *
   * @param {string} regionName - The name of the region to register the view with.
   * @param {HarmonixViewDefinition} view - The view definition to be registered.
   * @return {Promise<void>} A promise that resolves when the view is successfully registered.
   */
  registerView(regionName: string, view: HarmonixViewDefinition): Promise<void> {
    this.regionManager.registerViewWithRegion(
      regionName,
      `${this.pluginInfo.pluginId}::${view.id}`,
      view,
    );
    return Promise.resolve();
  }
  /**
   * Removes a view from a specific region.
   *
   * @param {string} regionName - The name of the region to remove the view from.
   * @param {string} viewId - The ID of the view to be removed.
   * @return {Promise<void>} A promise that resolves when the view is successfully removed.
   */
  removeView(regionName: string, viewId: string): Promise<void> {
    this.regionManager.getRegion(regionName).removeView(`${this.pluginInfo.pluginId}::${viewId}`);
    return Promise.resolve();
  }
  /**
   * Activates a view in a specific region.
   *
   * @param {string} regionName - The name of the region where the view is located.
   * @param {string} viewId - The ID of the view to be activated.
   * @return {Promise<void>} A promise that resolves when the view is successfully activated.
   */
  activateView(regionName: string, viewId: string): Promise<void> {
    this.regionManager.getRegion(regionName).activate(`${this.pluginInfo.pluginId}::${viewId}`);
    return Promise.resolve();
  }
  /**
   * Deactivates a view in a specific region.
   *
   * @param {string} regionName - The name of the region where the view is located.
   * @param {string} viewId - The ID of the view to be deactivated.
   * @return {Promise<void>} A promise that resolves when the view is successfully deactivated.
   */
  deactivateView(regionName: string, viewId: string): Promise<void> {
    this.regionManager.getRegion(regionName).deactivate(`${this.pluginInfo.pluginId}::${viewId}`);
    return Promise.resolve();
  }
  /**
   * Retrieves a region by its name.
   *
   * @param {string} regionName - The name of the region to retrieve.
   * @return {Promise<IRegion>} A promise that resolves to the retrieved region.
   */
  getRegion(regionName: string): Promise<IRegion> {
    return Promise.resolve(this.regionManager.getRegion(regionName));
  }
  /**
   * Checks if a view with the given ID exists in a specific region.
   *
   * @param {string} regionName - The name of the region to check.
   * @param {string} viewId - The ID of the view to check for.
   * @return {Promise<boolean>} A promise that resolves to true if the view exists, false otherwise.
   */
  containsView(regionName: string, viewId: string) {
    const region = this.regionManager.getRegion(regionName);
    return Promise.resolve(region?.containsView(`${this.pluginInfo.pluginId}::${viewId}`));
  }
  /**
   * Checks if a view with the given ID is active in a specific region.
   *
   * @param {string} regionName - The name of the region to check.
   * @param {string} viewId - The ID of the view to check for.
   * @return {Promise<boolean>} A promise that resolves to true if the view is active, false otherwise.
   */
  isViewActive(regionName: string, viewId: string) {
    const region = this.regionManager.getRegion(regionName);
    return Promise.resolve(region?.isViewActive(`${this.pluginInfo.pluginId}::${viewId}`));
  }

  registerMenu(view: HarmonixViewDefinition): Promise<void> {
    this.regionManager.registerViewWithRegion(
      shellRegions.menu,
      `${this.pluginInfo.pluginId}::${view.id}`,
      view,
    );
    return Promise.resolve();
  }
  registerQuickAction(view: HarmonixViewDefinition): Promise<void> {
    this.regionManager.registerViewWithRegion(
      shellRegions.quickActions,
      `${this.pluginInfo.pluginId}::${view.id}`,
      view,
    );
    return Promise.resolve();
  }
  registerMainView(view: HarmonixViewDefinition, title: string): Promise<void> {
    this.regionManager.registerViewWithRegion(
      shellRegions.main,
      `${this.pluginInfo.pluginId}::${view.id}`,
      view,
    );
    /* const titleView = createTitleView(view.id, title);
    this.regionManager.registerViewWithRegion(
      shellRegions.header,
      `${this.pluginInfo.pluginId}::${view.id}`,
      titleView,
    ); */
    return Promise.resolve();
  }
  activateMainView(viewId: string): Promise<void> {
    this.regionManager
      .getRegion(shellRegions.main)
      .activate(`${this.pluginInfo.pluginId}::${viewId}`);
    this.regionManager
      .getRegion(shellRegions.header)
      .activate(`${this.pluginInfo.pluginId}::${viewId}`);
    return Promise.resolve();
  }
}

/* const createTitleView = (id: string, title: string): HarmonixViewDefinition => ({
  id: id,
  factory: () => Promise.resolve(new TitleView(title)),
}); */

/**
 * Creates a proxy for the region manager with the given plugin info and region manager instance.
 *
 * @param {PluginInfo} pluginInfo - The plugin information.
 * @param {IRegionManager} regionManager - The region manager instance.
 * @return {HarmonixRegionManager} The created region manager proxy.
 */
export const createRegionManagerProxy = (
  pluginInfo: PluginInfo,
  regionManager: IRegionManager,
): HesCConfRegionManager => new RegionManagerProxy(pluginInfo, regionManager);
