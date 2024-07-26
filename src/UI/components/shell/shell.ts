import { IRegion, region } from "@uxland/regions";
import { LitElement, css, html, unsafeCSS } from "lit";
import { HesSettingsCenterRegionHost } from "../../../api/api";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.css?inline";
import { template } from "./template";
import { shellRegions } from "../../../api/regions/regions";
import { runConfigurations } from "../../../features/run-configurations/run-configurations";
import { IHESConfigurationItem } from "../../../domain/model";

//@ts-ignore
@customElement("hes-settings-center-shell")
export class HesSettingsCenterShell extends HesSettingsCenterRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  async connectedCallback() {
    super.connectedCallback();
    this.configurations = await runConfigurations();
  }

  @property()
  configurations: IHESConfigurationItem[] | undefined;

  @region({ targetId: "header-region-container", name: shellRegions.header })
  headerRegion: IRegion | undefined;

  @region({ targetId: "header-actions-region-container", name: shellRegions.headerActions })
  headerActionsRegion: IRegion | undefined;

  @region({ targetId: "menu-region-container", name: shellRegions.menu })
  menuRegion: IRegion | undefined;

  @region({ targetId: "main-region-container", name: shellRegions.main })
  mainRegion: IRegion | undefined;

  @region({ targetId: "quick-actions-region-container", name: shellRegions.quickActions })
  quickActionsRegion: IRegion | undefined;
}
