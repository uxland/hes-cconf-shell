export type THESCConfCategory = "user" | "admin";

export interface IHESCConfPlugin{
    pluginId: string;
    pluginUrl: string;
    name: string;
    category: THESCConfCategory[]
}

export interface IHESCConfSection{
    id: string;
    name: string;
    description: string;
    icon: string;
    plugins: IHESCConfPlugin[];
}