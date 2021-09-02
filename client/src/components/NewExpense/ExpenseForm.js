import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState("");
  function changeAmountHandler(event) {
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState("");
  function changeDateHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(ExpenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new_expense__control">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            onChange={changeTitleHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="1"
            onChange={changeAmountHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.forCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>

    </form>
  );
}

export default ExpenseForm;
