import { ChangeEvent, useState } from "react";
import { calculateUserInput } from "./calculateUserInput/calculateUserInput.ts";

export const SuperComponent = () => {
    const [expenses, setExpenses] = useState<number[]>([]);
    const [expenseInputValue, setExpenseInputValue] = useState<null | number>(null);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value === "") {
            setExpenseInputValue(null);
            return;
        }

        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue) || parsedValue < 0) return;

        setExpenseInputValue(parsedValue);
    };

    const addToExpenses = () => {
        if (expenseInputValue === null) {
            return;
        }

        setExpenses((prevExpenses) => [...prevExpenses, expenseInputValue]);

        setExpenseInputValue(null);
    };

    return (
        <>
            <h1>Calculate your expenses</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="expense-input">Expense:</label>
                <input
                    id="expense-input"
                    type="number"
                    placeholder="Provide your expenses"
                    onChange={onInputChange}
                    value={expenseInputValue ?? ""}
                />
                <button type="button" onClick={addToExpenses}>Add to expenses</button>
            </form>

            <div>
                {expenses.length > 0 ? (
                    expenses.map((expense, index) => (
                        <span key={index} style={{ margin: "10px" }}>{expense}</span>
                    ))
                ) : (
                    <p>No expenses</p>
                )}
            </div>

            <div>
                <h2>Your Current Expenses this month: {calculateUserInput(expenses)}</h2>
            </div>
        </>
    );
};
