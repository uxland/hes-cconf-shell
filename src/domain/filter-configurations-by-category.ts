import { IHESCConfSection } from "./model";

export function filterConfigurationsByCategory(category: string, data: IHESCConfSection[]) {
  return data
    .map((group) => {
      // Filtrar plugins que contienen la categoría especificada
      const filteredPlugins = group.plugins.filter((plugin) =>
        plugin.category.includes(category)
      );

      // Si hay plugins filtrados, devuelve un nuevo objeto con estos plugins
      if (filteredPlugins.length > 0) {
        return {
          ...group,
          plugins: filteredPlugins,
        };
      } else {
        return null; // Si no hay plugins, retorna null
      }
    })
    .filter((group) => group !== null); // Filtrar los grupos que son null
}