import React from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const newExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // console.log("expenseData",expenseData);
        props.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default newExpense
