import React from 'react';
import './ExpensesList.css'
import ExpenseItems from "./ExpenseItems";
const ExpensesList = (props)=>{
    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    else{
        return (
        <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))};
      </ul>
        )
    };
};

export default ExpensesList;