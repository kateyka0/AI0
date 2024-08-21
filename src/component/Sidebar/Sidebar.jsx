import React from "react";
import css from './Sidebar.module.css';

function Sidebar() {
  return (
      <aside className={css.sidebar}>
      <ul>
        <li>Chat 1</li>
        <li>Chat 2</li>
        <li>Chat 3</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
