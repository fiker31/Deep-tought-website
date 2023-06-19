import { logo1,profile} from "../assets";
import ConstructionIcon from '@mui/icons-material/Construction';
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const iconColor = 'blue-500';

const Navbar = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar shadow-2xl-outer">
      <img src={logo1} alt="deepthought" className="w-[250px] h-[32px] " />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ml-auto">
  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 mx-3">
    <HouseIcon className="h-7 w-7 text-white" />
  </div>
  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 mx-3">
    <ConstructionIcon className="h-7 w-7 text-white" />
  </div>
  <div className="relative mx-3">
    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500">
      <NotificationsIcon className="h-7 w-7 text-white" />
      <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></div>
    </div>
  </div>
  <div className="flex mx-2">
    <img className="h-8 w-8 rounded-full" src={profile} alt="Profile" />
  </div>
  <div className="p-2 cursor-pointer color-blue-500 mx-3">
    <MoreVertIcon />
  </div>
</ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
        
          </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;