import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.css?inline";
import { template } from "./template";
import { IHESCConfSection } from "../../../domain/model";

//@ts-ignore
@customElement("hes-cconf-dashboard")
export class HesCConfDashboard extends LitElement {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
    
  @property()
  configurationSections: IHESCConfSection[];

  _selectSection(sectionId: string) {
    const event = new CustomEvent("section-selected", {
      detail: sectionId,
    });
    this.dispatchEvent(event);
  }
}
