import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
const isSelected = (item: HTMLElement, attrForSelected: string, selection: string) =>
  item[attrForSelected] === selection ||
  Array.from(item.attributes).some(
    (attr) => attr.name === attrForSelected && attr.value === selection,
  );

@customElement("content-switcher")
export class ContentSwitcher extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static styles = css`
    :host {
      display: flex;
      flex: 1;
    }
    :host > ::slotted(:not(slot):not(.selected)) {
      display: none !important;
    }
  `;

  @property()
  selected: any;

  @property()
  attrForSelected: string;

  @property()
  animation = "fade";

  updated(props): any {
    this.select();
  }

  get items(): HTMLCollection {
    return this.children;
  }

  selectIndex() {
    return this.selected || this.selected === 0
      ? this.attrForSelected
        ? Array.from(this.items).findIndex((item: any) =>
            isSelected(item, this.attrForSelected, this.selected),
          )
        : Number.parseInt(this.selected)
      : -1;
  }

  select() {
    if (this.items.length) {
      const index = this.selectIndex();
      if (index !== -1) {
        const items = Array.from(this.items);
        items.forEach((i) => i.classList.remove("selected"));
        items[index]?.classList.add("selected");
      }
    }
  }

  doAnimation(item) {
    switch (this.animation) {
      case "fade":
        return item?.classList.add("fade-in");
      case "slideDown":
        return item?.classList.add("slide-down");
      case "slideLeft":
        return item?.classList.add("slide-left");
      case "slideRight":
        return item?.classList.add("slide-right");
      case "disabled":
        return;
      default:
        return item?.classList.add("fade-in");
    }
  }
}
