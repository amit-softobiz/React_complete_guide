import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const newExpense = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log("expenseData",expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHAndler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () =>{
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHAndler}>Add new Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler} />}
    </div>
  );
};

export default newExpense;
