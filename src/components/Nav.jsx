import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";
export default function Nav() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Prodotti",
      path: "/Prodotti",
    },
    {
      title: "Chi siamo",
      path: "/ChiSiamo",
    },
  ];
  const { budgetMode, toggleBudgetMode } = useContext(BudgetContext);

  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          className="text-decoration-none text-black p-2"
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
      <button
        onClick={toggleBudgetMode}
        className="bg-warning border rounded-3"
      >
        {budgetMode === true
          ? "Attiva Modalità Budget"
          : "Disattiva Modalità Budget"}
      </button>
    </>
  );
}
