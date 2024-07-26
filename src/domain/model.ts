export interface IHESSettingsCenterPlugin{
    pluginId: string;
    pluginUrl: string;
    name: string;
}

export interface IHESConfigurationItem{
    id: string;
    name: string;
    description: string;
    icon: string;
    tags: string[];
    plugins: IHESSettingsCenterPlugin[];
}