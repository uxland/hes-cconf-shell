import { IRegion, region } from "@uxland/regions";
import { LitElement, PropertyValues, css, html, unsafeCSS } from "lit";
import { HesCConfRegionHost } from "../../../api/api";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.css?inline";
import { template } from "./template";
import { shellRegions } from "../../../api/regions/regions";
import { IHESCConfSection, THESCConfCategory } from "../../../domain/model";
import { mainViews} from '../../../constants';
import { filterConfigurationsByCategory } from "../../../domain/filter-configurations-by-category";
import { searchConfigurations } from "../../../domain/search-configurations";

//@ts-ignore
@customElement("hes-cconf-shell")
export class HesCConfShell extends HesCConfRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._selectCategory("user");
  }

  @property()
  configurationSections: IHESCConfSection[];

  @property()
  filteredConfigurationSections: IHESCConfSection[];

  @property()
  selectedView = mainViews.dashboard;

  @property()
  selectedSection: IHESCConfSection;

  @region({ targetId: "header-right-region-container", name: shellRegions.headerRight })
  headerRightRegion: IRegion | undefined;

  _selectSection(sectionId: string) {
    this.selectedView = mainViews.section;
    this.selectedSection = this.filteredConfigurationSections?.find((c) => c.id === sectionId) as any;
  }

  _selectCategory(category: THESCConfCategory) {
    this.filteredConfigurationSections = filterConfigurationsByCategory(category, this.configurationSections);
  }

  _searchConfiguration(searchString: string) {
    this.filteredConfigurationSections = searchConfigurations(searchString, this.configurationSections);
  }

  _backToDashboard() {
    this.selectedView = mainViews.dashboard;
  }
}
