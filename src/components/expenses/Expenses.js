import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear,setFilterYear] = useState("2023");
    const filterChangeHandler = selectedYear =>{
        setFilterYear(selectedYear)
    }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.item.map((expense) =>(
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
       <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
       <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
       <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
      </Card>
    </div>
  )
}

export default Expenses