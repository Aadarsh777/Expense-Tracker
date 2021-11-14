import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

  const deleteExpenseHandler = (id) => {
    props.ondelete(id);
  }

  if (props.items.length === 0)  {
      return <div className="flex justify-center m-7">
        <p className="bg-blue-400 w-72 flex justify-center items-center text-white h-12 rounded-2xl">No expenses found!</p>
      </div>
  } else{

    return (
      <ul className="flex flex-col p-4 md:items-center">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDeleteExpense={deleteExpenseHandler}
          />
        ))}
      </ul>
    );
  }
};

export default Expenses;
