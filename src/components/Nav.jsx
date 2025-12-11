import { NavLink } from "react-router-dom";

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
    </>
  );
}
