import Image from "next/image";
import Phone1 from "../../static/phone1.png";
import Phone2 from "../../static/phone2.png";

const styles = {
  wrapper: "mx-auto",
  phoneContainer:
    "flex items-center justify-center flex-start ml-[-6rem] mt-4 sm:mt-0",
  phone1Container:
    "object-cover mt-[-18rem] mr-[-3rem] w-200 sm:w-299 sm:h-586",
  phone2Container:
    "object-cover mt-[-12rem] ml-[-12rem] w-200 sm:w-299 sm:h-586",
};

export default function PhotoGroup() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phoneContainer}>
        <div className={styles.phone1Container}>
          <Image className={styles.phone1} src={Phone1} alt={""} />
        </div>
        <div className={styles.phone2Container}>
          <Image className={styles.phone2} src={Phone2} alt={""} />
        </div>
      </div>
    </div>
  );
}
