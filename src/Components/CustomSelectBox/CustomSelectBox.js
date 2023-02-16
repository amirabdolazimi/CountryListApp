import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import "./CustomSelectBox.css";
const CustomSelectBox = () => {
  const options = [
    { label: "All", value: "All" },
    { label: "Africa", value: "africa" },
    { label: "Asia", value: "asia" },
    { label: "America", value: "america" },
    { label: "Europe", value: "europe" },
    { label: "Oceania", value: "oceania" },
  ];
  const [sortValue, setSortValue] = useState("Filter By Region");
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const clickHandler = () => {
    setDropDownStatus((prevState) => !prevState);
  };
  const sortHandler = (value) => {
    setSortValue(value);
    setDropDownStatus((prevState) => !prevState);
  };
  return (
    <div className="px-4 mt-8 grid w-2/3 lg:mt-14 lg:w-2/6 md:w-2/6 xl:w-1/6 relative ">
      <div
        onClick={clickHandler}
        className="hover:cursor-pointer dark:bg-slate-700 dark:text-slate-200 shadow active:bg-slate-300 grid grid-cols-2 bg-white relative lg:py-4 px-6 rounded py-3"
      >
        <p className="w-max text-sm lg:font-semibold">{sortValue}</p>
        <span className="absolute right-5 top-3 lg:top-4 text-xl font-extrabold">
          <RxCaretDown />
        </span>
      </div>
      <div
        className={`shadow dark:shadow-xl absolute w-5/6 bg-white top-14 left-4 rounded-md ${
          !dropDownStatus
            ? "opacity-0 hidden transition-all ease-out duration-300"
            : "opacity-100 block transition-all ease-out duration-300"
        }`}
      >
        {options.map((item) => {
          return (
            <div
              className="py-2 px-6 dark:bg-slate-700 dark:text-slate-200 hover:cursor-pointer active:bg-slate-200"
              key={item.value}
              onClick={() => sortHandler(item.label)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelectBox;
