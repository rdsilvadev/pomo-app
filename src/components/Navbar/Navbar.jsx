import React from 'react';
import { BsFillMoonFill, BsSunFill } from "../../Utils/icons";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/theme-context";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title cursor-pointer">
          <div class="ecom-name" onClick={() => navigate("/")}>
            ⏰ Focus ON
          </div>
        </div>
        <div class="user-activity-details">
          {theme === "light" ? (
            <BsFillMoonFill
              className="filter-icon"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <BsSunFill
              className="filter-icon"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
