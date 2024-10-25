import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Dropdown({ children, style, items }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    console.log("Showing dropdown");
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={style}
        onClick={() => {
          console.log(style);
        }}
      >
        {children}
      </button>
      {isDropdownVisible && <DropdownMenu items={items} />}
    </div>
  );
}
