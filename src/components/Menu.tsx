'use client';
import React, { useState } from 'react';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState<Boolean[]>([
    true,
    false,
    false,
    false
  ]);
  const menuItems = [
    { name: 'Home' },
    { name: 'Students' },
    { name: 'Classes' },
    { name: 'Reports' }
  ];

  const handleActiveMenuItem = (menuItem: number) => {
    const newState = activeMenu.map((_, i) =>
      i === menuItem ? (activeMenu[i] = true) : (activeMenu[i] = false)
    );

    setActiveMenu(newState);
  };
  return (
    <ul className="p-6 w-[10%]">
      {menuItems.map((menuItem, i) => (
        <li
          key={menuItem.name}
          value={menuItem.name}
          onClick={() => handleActiveMenuItem(i)}
          className={`p-2 min-w-fit ${
            activeMenu[i] == true
              ? ' bg-white text-blue-500 w-[80%] rounded-md'
              : 'text-slate-900'
          }`}
        >
          <a className={`menu-item `}>{menuItem.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
