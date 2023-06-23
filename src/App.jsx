import styles from "./style";
import { Navbar } from "./components";
import { Journeyboard } from "./components";
import Body from "./components/body";
import NoticeBoard from "./components/noticeboard";
import blueicons from "./assets/blueicons.svg";

const App = () => (
  <div className="pb-48 relative">
    <div className="bg-gray-200 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    <div className="relative px-40">
      <Journeyboard />
      <div class="place-items-center col-span-6 pt-5">
        <Body />
      </div>
      <NoticeBoard />
    </div>
    <img src={blueicons} alt="icons" className="absolute bottom-5 right-10" />
  </div>
);

export default App;
