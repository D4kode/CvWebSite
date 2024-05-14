import "../../global.css";

const Navbar = () => {
  return (
    <>
      <nav className="z-30 top-0 flex flex-col lg:flex-row w-full items-center bg-black justify-center lg:justify-between text-white py-2 text-xl" style={{borderBottom: "1px solid grey", paddingLeft:50, paddingRight:50}}>
        <div className="flex items-center lg:justify-center lg:items-center">
          <a href="/" className="text-xl font-bold justify-center text-center lg:mr-10">Maxance Gusse</a>
        </div>
        <div className="flex lg:flex-row lg:w-auto">
          <a className="flex font-semibold mt-1 ml-2 mr-2">à propos de moi</a>
          <a className="flex font-semibold mt-1 ml-2 mr-2">compétences</a>
          <a className="flex font-semibold mt-1 ml-2 mr-2">projets</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
