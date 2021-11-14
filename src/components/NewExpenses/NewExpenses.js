import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

  const [addNewExpense, setAddNewExpense] = useState(false)

  const saveNewExpenseHandler = (newExpenseData) => {
    const expense = {
      ...newExpenseData,
      id: Math.random(),
    };
    props.addNewExpense(expense);
  };

  const addNewHandler = () => {
     setAddNewExpense(true);
  }

  const cancelButtonHandler = () => {
     setAddNewExpense(false);
  }

  if (!addNewExpense) {
     return (
      <div className="bg-blue-400 shadow-2xl rounded-2xl m-12  flex justify-center h-14">
         <button onClick={addNewHandler} className="bg-white m-3 p-1 rounded-2xl text-blue-400">Add New Expense</button>
      </div>
     )
  } else {

   return (
      <div>
         <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancelHandler={cancelButtonHandler} />
      </div>
   );
  }
};

export default NewExpenses;
