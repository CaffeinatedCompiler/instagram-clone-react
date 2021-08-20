import React from "react";
import "./BottomNavigation.scss";
import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  User,
  Heart,
  Search,
  Add,
} from "../icons";

export default function BottomNavigation() {
  const { pathname } = useLocation();
  return (
    <nav className="bottom-navigation">
      <Link className="bottom-menu-item" to="/home">
        <HomeIcon active={pathname === "/home"} />
      </Link>
      <Link className="bottom-menu-item" to="/explore">
        <Search active={pathname === "/explore"} />
      </Link>
      <Link className="bottom-menu-item" to="/add">
        <Add active={pathname === "/add"} />
      </Link>
      <Link className="bottom-menu-item" to="favorite">
        <Heart active={pathname === "/favorite"} />
      </Link>
      <Link className="bottom-menu-item" to="/mucahitsah">
        <User active={pathname === "/user"} />
      </Link>
    </nav>
  );
};
