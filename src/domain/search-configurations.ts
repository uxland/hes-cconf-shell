import { IHESCConfSection } from "./model";

export function searchConfigurations(searchString: string, data: IHESCConfSection[]) {
  const lowerCaseSearchString = searchString.toLowerCase();

  return data.filter((group) => {
    const nameMatch = group.name.toLowerCase().includes(lowerCaseSearchString);
    const descriptionMatch = group.description.toLowerCase().includes(lowerCaseSearchString);

    return nameMatch || descriptionMatch;
  });
}