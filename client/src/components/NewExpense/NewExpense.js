import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function SaveExpenseDataHandler(enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const clickHandler = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          forCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
