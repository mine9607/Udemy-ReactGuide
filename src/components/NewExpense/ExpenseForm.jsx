import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //define initial state of newExpense object
  const [newExpenseData, setNewExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  //handle changes to object properties and update state of newExpense object
  const handleNewExpense = (event) => {
    setNewExpenseData((prevState) => {
      if (event.target.name === "title") {
        return { ...prevState, title: event.target.value };
      } else if (event.target.name === "amount") {
        return { ...prevState, amount: parseFloat(event.target.value) };
      } else {
        return { ...prevState, date: new Date(event.target.value + "T00:00") };
      }
    });
  };

  //handle the submit of the Expense Form when Add Expense button clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    //pass the extendedExpenseData object to the NewExpense component
    props.onSaveExpenseData(newExpenseData);
    //reset the fields in the Expense Form to blanks
    setNewExpenseData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" onChange={handleNewExpense} value={newExpenseData.title} />
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              onChange={handleNewExpense}
              value={newExpenseData.amount}
            />
            <label>Date</label>
            <input
              type="date"
              name="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={handleNewExpense}
              //value={newExpenseData.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
