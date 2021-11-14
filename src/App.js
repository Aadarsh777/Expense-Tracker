import React from "react";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Book",
    amount: 230,
    date: new Date(2021, 7, 15),
  },
  {
    id: 2,
    title: "Copy",
    amount: 50,
    date: new Date(2019, 12, 21),
  },
  {
    id: 3,
    title: "Cooler",
    amount: 2250,
    date: new Date(2021, 7, 23),
  },
  {
    id: 4,
    title: "Washing Machine",
    amount: 3750,
    date: new Date(2021, 3, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [year, setYear] = useState(2021)

  const defaultFilteredExpenses = expenses.filter(expense => expense.date.getFullYear() === year)

  const [filteredExpenses, setFilteredExpenses] = useState(defaultFilteredExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteHandler = (id) => {
    setExpenses((expenses.filter(expense => expense.id!==id)))
    setFilteredExpenses((filteredExpenses.filter(expense => expense.id!==id)));
  };

  const filterExpenses = (selectedYear) => {
    setYear(selectedYear)
    setFilteredExpenses((expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)))
  };

    return (
      <div>
        <NewExpenses addNewExpense={addExpenseHandler} />
        <ExpenseFilter defaultYear={year} expenses={filteredExpenses} onSelectedYear={filterExpenses} />
        <Expenses ondelete={deleteHandler} items={filteredExpenses} />
      </div>
    );
}

export default App;
