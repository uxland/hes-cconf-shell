import { html } from "lit";
import { HesCConfDashboard } from "./dashboard";
import { repeat } from "lit/directives/repeat.js";

export const template = (props: HesCConfDashboard) => html`
<div class="wrapper">
  <div class="tab-container">
    <button class="tab selected" @click=${(e)=>props._selectConfigurations("user", e.currentTarget)}>Usuari</button>
    <button class="tab" @click=${(e)=>props._selectConfigurations("admin", e.currentTarget)}>Administrador</button>
  </div>
  <div class="container">

    ${props.configurationSections?.length && repeat(
      props.configurationSections,
        (c) => html`<div class="dashboard-item" @click=${() => props._selectSection(c.id)}>
                        <div class="title">${c.name}</div>
                        <div class="description">${c.description}</div>
                    </div>`
    )}
</div>
</div>
`;