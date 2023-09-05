import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter.jsx";
import Card from "./components/UI/Card";
import initExpenseArray from "./InitialExpenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = initExpenseArray;

function App() {
  const [filterYear, setFilterYear] = useState("");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (expense) => {
    const key = "e" + (expenses.length + 1);
    const extendedExpense = { id: key, ...expense };
    //pass the new extendedExpense object into the expenses array
    setExpenses((prevExpenses) => {
      return [extendedExpense, ...prevExpenses];
    });
  };

  const handleFilterYear = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />

      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterYear={handleFilterYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default App;
