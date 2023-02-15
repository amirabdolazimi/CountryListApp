import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-lg container-sm  grid w-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
