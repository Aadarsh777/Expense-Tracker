import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

   const deleteExpenseHandler = (event) => {
      if(event.target.value === "on") {
         props.onDeleteExpense(props.id)
      }
   }

  return (
    <li className="flex mb-2 border-2 border-blue-400 md:w-1/2 flex-row">
      <input onChange={deleteExpenseHandler}
        className="flex place-content-center flex-row mt-8 ml-2"
        type="checkbox"
      />
      <ExpenseDate date={props.date} />
      <div className="flex w-40 bg-blue-400 rounded-2xl text-white items-center justify-center flex-row m-5">
        {props.title}
      </div>
      <div className="flex w-40 bg-blue-400 rounded-2xl text-white  items-center justify-center flex-row m-5">
        ₨{props.amount}
      </div>
    </li>
  );
};

export default ExpenseItem;
