"use client";
import React, { useState } from "react";
import BudgetTable from "../../components/budget/BudgetTable";

export interface BudgetList {
  name: string;
  amount: number;
  details: string;
  category: string;
  category_color?: string;
}

function Budget() {
  const [budgetList, setBudgetList] = useState<BudgetList[]>([
    {
      name: "EMI",
      amount: 100,
      details: "Paid",
      category: "Home",
      category_color: "blue",
    },
    {
      name: "CC Payment",
      amount: 220,
      details: "Due",
      category: "Personal",
      category_color: "blue",
    },
    {
      name: "Electricity Bill",
      amount: 1500,
      details: "Due",
      category: "Personal",
    },
  ]);
  return (
    <div>
      <div>
        <h1>Budget Maker</h1>
        <BudgetTable budgetList={budgetList} />

        <form action="">
          <input type="text" name="budgetName" id="budgetName" />
          <input type="number" name="budgetAmount" id="budgetAmount" />
          <input type="text" name="budgetDetails" id="budgetDetails" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Budget;
