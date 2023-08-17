import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const Newexpense = (props)=> {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       props.onAddExpense(expenseData);
       setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    };

    const stopEditingHandler = () => {
        setIsEditing(false)
    };

    return(
    <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
};
export default Newexpense;