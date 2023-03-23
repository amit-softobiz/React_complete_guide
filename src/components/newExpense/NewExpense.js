import React from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const newExpense = () => {
  return (
    <div className='new-expense'>
        <ExpenseForm/>
    </div>
  )
}

export default newExpense
