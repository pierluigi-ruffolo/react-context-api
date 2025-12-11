import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setbudgetMode] = useState(true);
  const [inputNum, SetInputNum] = useState(null);

  function toggleBudgetMode() {
    setbudgetMode(!budgetMode);
  }

  const value = {
    budgetMode,
    toggleBudgetMode,
    SetInputNum,
    inputNum,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}

export { BudgetProvider, BudgetContext };
