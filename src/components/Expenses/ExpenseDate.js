import React from "react";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="flex bg-blue-400 rounded-2xl text-white justify-center flex-row m-5">
      <div className="m-2 p-1">{month}</div>
      <div className="m-2 p-1">{year}</div>
      <div className="m-2 p-1">{day}</div>
    </div>
  );
};

export default ExpenseDate;
