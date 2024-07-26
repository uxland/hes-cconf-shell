export const getConfigurations = () => {
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
                },
            ],
        },
        {
            id: "user-management",
            name: "Gestió D'usuari",
            description: "Configuració de les teves dades i connexions",
            icon: "user",
            tags: ["user", "configurations"],
            plugins: [
                {
                    pluginId: "user-administrative-data",
                    pluginUrl: "",
                    name: "Dades administratives de l'usuari",
                },
            ],
        },
    ]);
}