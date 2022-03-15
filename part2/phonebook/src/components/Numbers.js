import React from "react";

const Numbers = ({ numbers }) => {
  return numbers.map((number) => <div key={number.name}>{number.name}</div>);
};

export default Numbers;
