import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setbudgetMode] = useState(false);

  function toggleBudgetMode() {
    setbudgetMode(!budgetMode);
  }

  const value = {
    budgetMode,
    toggleBudgetMode,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}

export { BudgetProvider, BudgetContext };
