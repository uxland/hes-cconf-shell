import { html, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { HesCConfSection } from "./section";
import {IHESCConfPlugin} from '../../../domain/model';

export const template = (props: HesCConfSection) => html`
${props.section ? html `<div class="container">
    <div class="header"><span @click=${() => props._backToDashboard()}>Centre de configuració</span> > <span class="section-selected">${props.section.name}</span></div>
    <div class="content">
      <div class="sidebar">
        <div class="section-title">${props.section.name}</div>
        <div class="section-configurations">${repeat(props.section.plugins, (p: IHESCConfPlugin) => html`<div class="configuration-item" ?selected=${p.pluginId === props.selectedPlugin} @click=${() => props._selectConfiguration(p.pluginId)}>${p.name}</div>`) }</div>
      </div>
      <content-switcher id="plugin-main-region-container"></content-switcher>
    </div>
</div>` : nothing}
`;