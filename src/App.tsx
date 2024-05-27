import React, { useState, useCallback, useMemo } from "react";
import Card from "./components/Card/Card.tsx";
import CardFilters from "./components/CardFilters/CardFilters.tsx";
import { useFetchData } from "./hooks/useFetchData.ts";
import { filterData } from "./helpers/filterData.ts";
import "./styles/App.scss";

const App: React.FC = () => {
  const { data, loading, error } = useFetchData();
  const [filterActive, setFilterActive] = useState<number>(0);
  const handleChangeFilter = useCallback((index: number): void => {
    setFilterActive(index);
  }, []);

  const filteredData = useMemo(() => {
    return data ? filterData(data, filterActive) : [];
  }, [data, filterActive]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="wrapper">
      <CardFilters onChange={handleChangeFilter} filterActive={filterActive} />
      <div className="cards-box">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            bgColor={item.bgColor}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default App;