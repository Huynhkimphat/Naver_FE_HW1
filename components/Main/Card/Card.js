import Image from "next/image";
import Phone3 from "../../../static/phone3.png";

const styles = {
  wrapper: "mx-auto flex max-h-[50rem] justify-center gap-[6rem]",
  imageContainer: "",
  image:"",
  mainContent: "flex flex-col justify-center",
  subTitle: "",
  title: "",
  detail: "",
};

export default function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={Phone3} alt={""} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.subTitle}>Create an account</div>
        <div className={styles.title}>
          Create/login to an existing account to get started
        </div>
        <div className={styles.detail}>
          An account is created with your email and a desired password
        </div>
      </div>
    </div>
  );
}
