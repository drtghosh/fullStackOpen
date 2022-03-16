import React from "react";

const Numbers = ({ numbers }) => {
  return numbers.map((number) => (
    <div key={number.name}>
      {number.name} {number.number}{" "}
    </div>
  ));
};

export default Numbers;
