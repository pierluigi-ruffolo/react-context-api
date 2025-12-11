import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider() {
  const [budgetMode, setbudgetMode] = useState(false);

  function toggleBudgetMode() {
    setbudgetMode(!budgetMode);
  }
}
