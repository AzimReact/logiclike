import { filterTitles } from "../components/Card/constants";
import { IData } from "../types/data";

export const filterData = (data: IData[], filterIndex: number): IData[] => {
  if (filterIndex === 0) return data;

  const filterTitle = filterTitles[filterIndex];
  const tagToFilter = filterTitle === "Путешествия" ? "Страны и столицы" : filterTitle;
  return data.filter(item => item.tags && item.tags.includes(tagToFilter));
};