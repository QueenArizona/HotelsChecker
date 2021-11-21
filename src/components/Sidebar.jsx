import React from "react";
import Search from "./Search";
import Favorites from "./Favorites";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <Search />
      <Favorites />
    </aside>
  );
}

export default Sidebar;
