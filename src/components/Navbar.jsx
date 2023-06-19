import { logo1, profile } from "../assets";
import ConstructionIcon from "@mui/icons-material/Construction";
import HouseIcon from "@mui/icons-material/House";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const iconColor = "blue-500";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo1} alt="deepthought" className="w-[250px] h-[32px] " />

      <ul className="list-none sm:flex hidden justify-end items-center ml-auto">
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
        <div className="flex mx-3">
          <img className="h-8 w-8 rounded-full" src={profile} alt="Profile" />
        </div>
        <div className="cursor-pointer color-blue-500 mx-2">
          <MoreVertIcon className="h-7 w-7 text-blue-500" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;