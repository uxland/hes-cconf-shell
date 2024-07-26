import { setLanguage } from "@uxland/localization";
import { HesSettingsCenterApi } from "./api/api";
import { hesSettingsCenterShellId } from "./constants";

let shellLocaleManager;

export const initializeLocalization = async (api: HesSettingsCenterApi) => {
  setLanguage("ca");
  const localeManager = await api.createLocaleManager(locales);
  shellLocaleManager = localeManager;
};

export { shellLocaleManager };

export const locales = {
  ca: {
    [hesSettingsCenterShellId]: {
      title: "HES Centre de configuracions",
    },
  },
};
