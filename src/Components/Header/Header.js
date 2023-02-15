import { BsMoon } from "react-icons/bs";
const Header = () => {
  return (
    <header className="grid w-full grid-cols-2 shadow-sm lg:px-14 col-span-full p-4 bg-white font-semibold lg:font-bold">
      <div>
        <h1 className="lg:font-bolder lg:text-xl">Where in the world ?</h1>
      </div>
      <div className="grid grid-cols-2 justify-self-end ">
        <span className="inline-block justify-self-end self-center mr-1 ">
          <BsMoon />
        </span>
        <span className="inline-block">Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
