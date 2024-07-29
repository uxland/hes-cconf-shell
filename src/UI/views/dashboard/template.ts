import { html } from "lit";
import { HesCConfDashboard } from "./dashboard";
import { repeat } from "lit/directives/repeat.js";

export const template = (props: HesCConfDashboard) => html`
<div class="container">
    ${props.configurationSections?.length && repeat(
      props.configurationSections,
        (c) => html`<div class="dashboard-item" @click=${() => props._selectSection(c.id)}>
                        <div class="title">${c.name}</div>
                        <div class="description">${c.description}</div>
                    </div>`
    )}
</div>`;