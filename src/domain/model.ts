export interface IHESCConfPlugin{
    pluginId: string;
    pluginUrl: string;
    name: string;
    category: string[]
}

export interface IHESCConfSection{
    id: string;
    name: string;
    description: string;
    icon: string;
    tags: string[];
    plugins: IHESCConfPlugin[];
}