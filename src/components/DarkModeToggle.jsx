import React, { useContext } from 'react';
import { EcommerceContext } from '../context/EcommerceContext'; // ✅ adjust the path if different

function DarkModeToggle() {
  const { dispatch } = useContext(EcommerceContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-white transition"
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;
