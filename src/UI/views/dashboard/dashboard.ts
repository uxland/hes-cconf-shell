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

  _selectConfigurations(category: string, element: HTMLElement) {
    (this as any).shadowRoot.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('selected');
      });

    element.classList.add('selected');
    const event = new CustomEvent("category-selected", {
      detail: category,
    });
    this.dispatchEvent(event);
  }

  _searchConfiguration(event: Event) {
    const target = event.target as HTMLInputElement;
    const customEvent = new CustomEvent("configuration-searched", {
      detail: target.value,
    });
    this.dispatchEvent(customEvent);
  }
}
