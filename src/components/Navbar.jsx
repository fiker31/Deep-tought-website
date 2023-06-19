import { close, logo1, menu,home } from "../assets";


const Navbar = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo1} alt="deepthought" className="w-[250px] h-[32px] " />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
       

       
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
        
          </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;