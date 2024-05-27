import { filterTitles } from "../Card/constants.ts";
import "../../styles/filters.scss";

type CardFiltersProps = {
  filterActive: number;
  onChange: (index: number) => void
};

const CardFilters = ({ filterActive, onChange }: CardFiltersProps) => {
  return (
    <div className="filters-box">
      {filterTitles.map((title, index) => {
        return (
          <div
            className={`filter ${filterActive === index ? "filter-active" : ""
              }`}
            onClick={() => onChange(index)}
            key={title}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default CardFilters;
