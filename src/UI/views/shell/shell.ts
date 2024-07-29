import { IRegion, region } from "@uxland/regions";
import { LitElement, css, html, unsafeCSS } from "lit";
import { HesCConfRegionHost } from "../../../api/api";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.css?inline";
import { template } from "./template";
import { shellRegions } from "../../../api/regions/regions";
import { IHESCConfSection } from "../../../domain/model";
import { mainViews} from '../../../constants';

//@ts-ignore
@customElement("hes-cconf-shell")
export class HesCConfShell extends HesCConfRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  @property()
  configurationSections: IHESCConfSection[];

  @property()
  selectedView = mainViews.dashboard;

  @property()
  selectedSection: IHESCConfSection;

  @region({ targetId: "header-right-region-container", name: shellRegions.headerRight })
  headerRightRegion: IRegion | undefined;

  _selectSection(sectionId: string) {
    this.selectedView = mainViews.section;
    this.selectedSection = this.configurationSections?.find((c) => c.id === sectionId) as any;
  }

  _backToDashboard() {
    this.selectedView = mainViews.dashboard;
  }
}
