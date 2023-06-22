import styles from "./style";
import { Navbar } from "./components";
import { Journeyboard } from "./components";
import Body from "./components/body";
import NoticeBoard from "./components/noticeboard";

const App = () => (
  <div>
    <div className="bg-gray-200 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-8 gap-10">
      <Journeyboard />
      <div class="place-items-center col-span-6 pt-5">
        <Body />
      </div>
      <NoticeBoard />
    </div>
  </div>
);

export default App;
