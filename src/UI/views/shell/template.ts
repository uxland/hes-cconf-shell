//import "@salut/design-system-salut";
//import "@salut/design-system-salut/css/main.css";
import "../../dss.css";
import { html } from "lit";
import { HesCConfShell } from "./shell";
import { mainViews } from "../../../constants";
import '../dashboard/dashboard';
import '../section/section';
import '../../components/content-switcher/content-switcher';
import salutLogo from "../../images/Salut_Logotip.svg";
import gencatLogo from "../../images/Gencat_Logotip.svg";

export const template = (props: HesCConfShell) => html`
<div class="container">
   <div class="header">
    <div class="header__left">
      <div class="header-logo">
        <img src=${salutLogo} alt="logo" />
      </div>
      <div class="header-title">HES | Centre de configuració</div>
    </div>
    <div class="header-right-region-container"></div>
  </div>
  <div class="main-container">
    <div class="sidebar">
      <div id="menu-region-container"></div>
      <div id="quick-actions-region-container"></div>
    </div>
      <content-switcher class="content" attrForSelected="name" .selected=${props.selectedView}>
        <hes-cconf-dashboard name=${mainViews.dashboard} .configurationSections=${props.configurationSections} @section-selected=${(e)=>props._selectSection(e.detail)}></hes-cconf-dashboard>
        <hes-cconf-section name=${mainViews.section} .section=${props.selectedSection} @back-to-dashboard=${() => props._backToDashboard()}></hes-cconf-section>
      </content-switcher>
  </div>
  <div class="footer">
    <div class="footer-logo">
      <img src="${gencatLogo}" alt="logo" />
    </div>
    <span class="divider"></span>
    <div class="footer-title">Historial Electrònic de Salut (HES)</div>
  </div>
</div>`;
