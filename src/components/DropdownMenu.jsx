import { useState } from "react";

export default function DropdownMenu({ items }) {
  return (
    <div className="dropdown-menu">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              console.log(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
