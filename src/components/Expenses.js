import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const[filteredYear,setFilteredYear]= useState("2019");
  const filterChangeHandler = selectedYear => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
      <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses = {filteredExpenses}/>
          <ExpensesList items = {filteredExpenses}/>   
      </Card>     
    </div>   
    )
}
export default Expenses;