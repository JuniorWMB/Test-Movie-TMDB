import React from "react";

const TitleBlock = ({ title }) => {
  return (
    <div data-testid="title" className="title-block">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBlock;
