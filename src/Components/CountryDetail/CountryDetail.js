import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const CountryDetail = () => {
  const location = useLocation();
  const country = location.state;
  const nativeName = Object.values(
    Object.values(country.name.nativeName)[0]
  )[1];
  const currencies = Object.values(Object.values(country.currencies).at(0)).at(
    0
  );
  const languages = Object.keys(country.languages);

  return (
    <div className="px-6 grid-cols-1 my-10 lg:px-14 ">
      <div className="mb-14">
        <Link to="/" className="inline-block">
          <button className="flex items-center bg-white dark:bg-slate-700 dark:text-slate-100 dark:shadow-2xl px-5 py-1.5 pl-8 shadow-md rounded">
            <span className="font-bolder">
              <BsArrowLeft />
            </span>
            <span className="ml-2">Back</span>
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-rows-1 dark:text-slate-100">
        <div className="w-full">
          <img
            className="w-full"
            src={country.flags.svg}
            alt={country.flags.alt}
          />
        </div>
        <div className="grid grid-cols-1 text-start mt-10 md:mt-0 lg:mt-0 md:ml-10 lg:ml-10 xl:ml-20">
          <div className="mt-2 mb-5 md:mb-2 lg:mb-0 lg:mt-0">
            <h2 className="font-bold flex justify-between text-3xl md:text-2xl lg:text-3xl xl:mt-4">
              {country.name.common}
              {country.name.common === "Iran" && (
                <p className="text-red-600 font-bold mt-0.5 text-2xl">
                  #Women_Freedom_Life
                </p>
              )}
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Native Name :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {nativeName}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Population :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {country.population}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Region :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {country.region}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Sub Region :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {country.subregion}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Capital :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {country.capital[0]}
                </span>
              </div>
            </div>
            <div className="mt-7 md:mt-1 lg:mt-0">
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Top Level Domain :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {country.tld[0]}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Currencies :
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {currencies}
                </span>
              </div>
              <div className="my-2.5 flex items-center">
                <p className="font-semibold mr-2 text-lg xl:text-lg md:text-base">
                  Languages :
                </p>
                {languages.map((item) => (
                  <span
                    className="mr-1 text-slate-600 dark:text-slate-400"
                    key={item}
                  >
                    {item},
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 text-start md:col-span-full lg:ml-10 lg:mt-0 lg:col-start-2 xl:flex xl:ml-20">
          <div className="xl:w-50">
            <h3 className="text-2xl md:text-lg xl:text-lg font-semibold">
              Border Countries :
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5 lg:gap-3 mt-5 xl:flex xl:mt-0 xl:flex-wrap">
            {country.borders
              ? country.borders.map((item) => (
                  <div
                    className="py-3 bg-white dark:bg-slate-700 xl:py-1 text-center rounded shadow-md xl:px-8"
                    key={item}
                  >
                    {item}
                  </div>
                ))
              : "there is no border country !"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
