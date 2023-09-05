import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveExpenseData = (newExpenseData) => {
    props.onAddExpense(newExpenseData);
    setIsEditing(false);
  };

  const handleShowForm = () => {
    setIsEditing(true);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleShowForm}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={handleStopEditing} />}
    </div>
  );
}

export default NewExpense;
