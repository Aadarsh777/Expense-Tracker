import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  const titleHandler = (event) => {
    if (title.trim().length > 0) {
      setIsValidTitle(true);
    }
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    if (amount.trim().length > 0) {
      setIsValidAmount(true);
    }
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    if (date.trim().length > 0) {
      setIsValidDate(true);
    }
    setDate(event.target.value);
  };

  const saveExpenseHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      setIsValidTitle(false);
      return;
    } else if (amount.trim().length === 0) {
      setIsValidAmount(false);
      return;
    } else if (date.trim().length === 0) {
      setIsValidDate(false);
      return;
    }

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveNewExpense(expenseData);

    setDate("");
    setTitle("");
    setAmount("");
    setIsValidDate(true);
    setIsValidAmount(true);
    setIsValidAmount(true);
    props.onCancelHandler();
  };

  const cancelHandler = () => {
    props.onCancelHandler();
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={saveExpenseHandler}
        className="bg-blue-400 shadow-2xl rounded-2xl m-8 w-96 flex flex-col"
      >
        <div className="flex p-4 flex-col">
          <label
            className="p-4 text-white"
            style={{ color: !isValidTitle && "red" }}
          >
            Enter the title:{" "}
          </label>
          <input
            onChange={titleHandler}
            className="w-40 text-center rounded-2xl ml-12"
            style={{
              borderColor: !isValidTitle ? "red" : "black",
              backgroundColor: !isValidTitle ? "salmon" : "white",
            }}
            type="text"
            value={title}
          />
          {!isValidTitle && <p className="ml-14 text-red-700 text-xs">(x_x)Mandatory Field!</p>}
        </div>
        <div className="flex p-4 flex-col">
          <label
            className="p-4 text-white"
            style={{ color: !isValidAmount && "red" }}
          >
            Enter the price:{" "}
          </label>
          <input
            onChange={amountHandler}
            className="w-40 text-center rounded-2xl ml-12"
            style={{
              borderColor: !isValidAmount ? "red" : "black",
              backgroundColor: !isValidAmount ? "salmon" : "white",
            }}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
          {!isValidAmount && <p className="ml-14 text-red-700 text-xs">(x_x)Mandatory Field!</p>}
        </div>
        <div className="flex p-4 flex-col">
          <label
            className="p-4 text-white"
            style={{ color: !isValidDate && "red" }}
          >
            Enter the date of purchase:{" "}
          </label>
          <input
            onChange={dateHandler}
            className="w-40 rounded-2xl ml-12 text-center text-blue-400"
            style={{
              borderColor: !isValidDate ? "red" : "black",
              backgroundColor: !isValidDate ? "salmon" : "white",
            }}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
          />
          {!isValidDate && <p className="ml-14 text-red-700 text-xs">(x_x)Mandatory Field!</p>}
        </div>
        <div className="flex text-blue-400 p-4 flex-row justify-end">
          <button
            className="m-2 bg-white w-40 p-2 rounded-3xl"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button className="m-2 bg-white w-40 rounded-3xl" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
