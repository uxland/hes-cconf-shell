import { LitElement, PropertyValues, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.css?inline";
import { template } from "./template";
import { IHESCConfSection } from "../../../domain/model";
import { HesCConfRegionHost } from "../../../api/api";
import { IRegion, region } from "@uxland/regions";
import { shellRegions } from "../../../api/regions/regions";

//@ts-ignore
@customElement("hes-cconf-section")
export class HesCConfSection extends HesCConfRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  @property()
  section: IHESCConfSection;

  @property()
  selectedPlugin: string;

  @region({ targetId: "plugin-main-region-container", name: shellRegions.pluginMain })
  pluginMainRegion: IRegion | undefined;

  updated(_changedProps: PropertyValues) {
    super.updated(_changedProps);
    setTimeout(() => {
      const firstPlugin = this.section?.plugins[0];
    if (firstPlugin) {
      this._selectConfiguration(firstPlugin.pluginId);
    }
    }, 500);
  }
  
  _backToDashboard() {
    this.dispatchEvent(new CustomEvent("back-to-dashboard"));
  }

  _selectConfiguration(pluginId: string) {
    this.selectedPlugin = pluginId;
    this.pluginMainRegion?.activate(pluginId);
  }
}
