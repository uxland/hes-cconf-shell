//import "@salut/design-system-salut";
//import "@salut/design-system-salut/css/main.css";
import "../../dss.css";
import { html } from "lit";
import { HesSettingsCenterShell } from "./shell";

export const template = (props: HesSettingsCenterShell) => html`
<div class="container">
   <div class="header">
    <div class="header__left">
      <div class="header-logo">
        <img src="/images/Salut_Logotip.svg" alt="logo" />
      </div>
      <div class="header-title">HES | Centre de configuració</div>
      <content-switcher id="header-region-container"></content-switcher>
    </div>
    <div class="header__right">
       <div id="header-actions-region-container"></div>
    </div>
  </div>
  <div class="main-container">
    <div class="sidebar">
      <div id="menu-region-container"></div>
      <div id="quick-actions-region-container"></div>
    </div>
    <div class="content">
      <div id="floating-region-container"></div>
      <content-switcher id="main-region-container"></content-switcher>
    </div>
  </div>
  <div class="footer">
    <div class="footer-logo">
      <img src="/images/Gencat_Logotip.svg" alt="logo" />
    </div>
    <span class="divider"></span>
    <div class="footer-title">Historial Electrònic de Salut (HES)</div>
  </div>
</div>`;
