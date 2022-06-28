import React from "react";
import FilterButton from "./FilterButton";

const SortBy = () => {
  return (
    <div className="section-sortby">
      <label htmlFor="name" className="mb-2 italic">
        Trier par :
      </label>
      <FilterButton textPlaceholder="Ordre alphabétique" />
    </div>
  );
};

export default SortBy;
