import { css, html, LitElement, render, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./styles.css?inline";

@customElement("dss-container")
export class DssContainer extends LitElement {
  render() {
    return html`
    <slot></slot>
     <div id="container"></div>
    `;
  }

  firstUpdated() {
    const slot = this.shadowRoot?.querySelector("slot");
    const assignedNodes = slot?.assignedNodes({ flatten: false });

    // assignedNodes.forEach((node) => {
    //   if (node.nodeType === Node.ELEMENT_NODE) {
    //     console.log((node as HTMLElement).outerHTML);
    //   } else if (node.nodeType === Node.TEXT_NODE) {
    //     console.log(node.textContent);
    //   }
    // });

    // @ts-ignore
    render(assignedNodes[0], this.shadowRoot.querySelector("#container"));
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
