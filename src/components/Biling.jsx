import {apple, bill, google} from "../assets";
import styles, {layout} from "../style";

const Biling = () => (
<section id="product" className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
  <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

</div>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/>billing and invoicing</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
With our billing and invoicing software, you can say 
goodbye to the headache of manual invoicing and billing.
 Our easy-to-use platform automates the entire process,
from generating invoices to tracking payments and sending reminders.
You'll save time and reduce errors, 
you can tailor the platform to your unique business needs.
</p>
<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
  <img src={apple} alt="apple-store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "/>
  <img src={google} alt="google-play" className="w-[128px] h-[42px] object-contain  cursor-pointer "/>
  


</div>

</div>

</section>
)
  

export default Biling