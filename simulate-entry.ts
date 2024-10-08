import { bootstrapPlugins, PluginDefinition } from "@uxland/harmonix";
import { hesCConfApiFactory } from "./src/api/api";
import { IHESCConfSection, THESCConfCategory } from "./src/domain/model";
import { initializeShell } from "./src/initializer";

const buildHarmonixPlugins = (configurationSections: IHESCConfSection[]) => { 
  const plugins = configurationSections
    .map((c) => c.plugins)
    .flat()
    .map((p) => {
      return {
        pluginId: p.pluginId,
        importer: ()=>import(p.pluginUrl),
      };
    });
  return plugins;
}

export const getConfigurationsAndPlugins = async () => {
  const configurationSections = await fetchConfigurations();
  const plugins = buildHarmonixPlugins(configurationSections) as PluginDefinition[];
  return {configurationSections, plugins};
};


export const fetchConfigurations = () => {
    return Promise.resolve([
        {
            id: "notifications",
            name: "Notificacions",
            description: "Configuració i manteniment de notificacions i alertes",
            icon: "notification",
            tags: ["configurations"],
            plugins: [
                {
                    pluginId: "patient-notifications",
                    pluginUrl: "",
                    name: "Notificacions del pacient",
                    category: ["user"] as THESCConfCategory[]
                },
                {
                    pluginId: "professional-notifications",
                    pluginUrl: "",
                  name: "Notificacions del professional",
                    category: ["user", "admin"] as THESCConfCategory[]
                },
            ],
        },
        {
            id: "user-management",
            name: "Gestió d'usuari",
            description: "Configuració de les teves dades i connexions",
            icon: "user",
            tags: ["user", "configurations"] as THESCConfCategory[],
            plugins: [
                {
                    pluginId: "user-administrative-data",
                    pluginUrl: "",
                    name: "Dades administratives de l'usuari",
                    category: ["admin"] as THESCConfCategory[],
                },
            ],
        },
    ]);
}


export const createAndAppendSandboxApp = () => {
  const app = document.createElement("hes-cconf-app");
  document.body.appendChild(app);
  const sandbox = document.querySelector("hes-cconf-app");
  return sandbox;
};

export const initializeSandboxApp = async (sandbox) => {
  try {
      if (sandbox) {
        const {configurationSections, plugins} = await getConfigurationsAndPlugins();
        initializeShell(sandbox as HTMLElement,configurationSections);
        bootstrapPlugins(plugins, hesCConfApiFactory);
    }
  } catch (error) {
    console.warn(error);
  }
};

const sandbox = createAndAppendSandboxApp();
initializeSandboxApp(sandbox);
