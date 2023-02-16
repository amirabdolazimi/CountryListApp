import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const root = window.document.documentElement;
  const body = window.document.body;
  const themeHandler = () => {
    setDarkMode((prevState) => !prevState);
    if (!darkMode) {
      root.classList.add("dark");
      body.classList.add("bg-slate-800");
    } else {
      root.classList.remove("dark");
      body.classList.remove("bg-slate-800");
    }
  };
  return (
    <header className="grid w-full grid-cols-2 shadow-sm lg:px-14 col-span-full dark:shadow-lg p-4 bg-white dark:bg-slate-700 dark:text-slate-200 font-semibold lg:font-bold ">
      <div>
        <h1 className="lg:font-bolder lg:text-xl">Where in the world ?</h1>
      </div>
      <div className="grid grid-cols-2 justify-self-end">
        <span className="inline-block justify-self-end self-center mr-1 ">
          {!darkMode ? <BsMoon /> : <BsSun />}
        </span>
        <span
          className="inline-block hover:cursor-pointer"
          onClick={themeHandler}
        >
          {!darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
};

export default Header;
