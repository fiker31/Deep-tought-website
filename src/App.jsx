import styles from "./style";
import {Navbar} from './components';
import {Journeyboard} from './components';

const App = () => (
  <div>

    <div className='bg-gray-200 w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
          <Navbar/>
      </div>
       </div>
      </div>
     
       <div className="flex">
         <Journeyboard/>
         </div>
        </div>
       
);


export default App
