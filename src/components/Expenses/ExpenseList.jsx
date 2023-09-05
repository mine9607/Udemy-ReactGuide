import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return props.items.map((expense) => {
    return (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount.toFixed(2)} date={expense.date} />
    );
  });
}

export default ExpenseList;
