import React from "react";
import ExpenseFilterBar from "./ExpenseFilterBar";

const ExpenseFilter = (props) => {
  const allValue = props.expenses.map((expense) => expense.amount);

  const maxValue = Math.max(...allValue);

  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  const selectYearHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap border-2 border-blue-400 md:justify-center md:w-1/7 flex-row">
        <div className="flex mt-7 ml-2 h-7">
          <select value={props.defaultYear} onChange={selectYearHandler}>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
        {dataPoints.map((dataPoint) => (
          <ExpenseFilterBar
            label={dataPoint.label}
            maxValue={maxValue}
            value={dataPoint.value}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseFilter;
