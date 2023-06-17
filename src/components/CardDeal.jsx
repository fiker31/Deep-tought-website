import { card } from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
  
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
Find a better card deal <br className="sm:block hidden"/> in few easy steps
      </h2>
      <p className={`${styles.paragraph } max-w-[470px] mt-5`}>

Our credit card offers cashback on all purchases. Plus, with 24/7 customer support and exclusive perks, 
and is the perfect choice for anyone looking for a hassle-free credit card experience. 
      </p>
      <Button styles={`mt-10`}/>

    </div>
<div className={layout.sectionImg}>
  <img src={card} alt="billing" className="w-[100%] h-[100%]"/>
</div>

   </section>
  )


export default CardDeal