import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../helpers";

import "./Navigation.css";
export default function Navigation() {
  const data = useContext(DataContext).sort((a, b) => a.order - b.order);

  return (
    <div className="Navigation">
      {data.map((el) => {
        return (
          <NavLink to={el.path} key={el.order}>
            {el.title}
          </NavLink>
        );
      })}
    </div>
  );
}
