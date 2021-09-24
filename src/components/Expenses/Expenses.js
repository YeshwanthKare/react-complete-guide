import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const pickedYearHandler = (yearPicked) => {
    setSelectedYear(yearPicked);
  };

  const filterYearSelected = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          yearPicked={pickedYearHandler}
        />
        <ExpensesList filteredYear={filterYearSelected} />
      </Card>
    </div>
  );
};

export default Expenses;
