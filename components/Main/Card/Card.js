import Image from "next/image";

const styles = {
  wrapper:
    "mx-auto flex flex-col-reverse sm:flex-row max-h-[50rem] justify-center gap-[1rem]",
  wrapperReverse:
    "mx-auto flex flex-col-reverse sm:flex-row-reverse max-h-[50rem] justify-center gap-[1rem]",
  imageContainer: "ml-[4rem]",
  image: "object-cover",
  mainContent: "flex flex-col justify-center items-center sm:items-start ",
  subTitle: "font-semibold text-[#FA4A0C] text-xl sm:py-2 py-4 px-2",
  title: "font-bold text-3xl sm:max-w-[31rem] text-center sm:text-left px-2",
  detail: "sm:py-2 py-4 text-[#737373] text-center sm:text-left px-4 sm:px-2",
};

export default function Card(props) {
  return (
    <div
      className={props.item.isRevert ? styles.wrapperReverse : styles.wrapper}
    >
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={props.item.photo} alt={""} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.subTitle}>{props.item.subTitle}</div>
        <div className={styles.title}>{props.item.title}</div>
        <div className={styles.detail}>{props.item.detail}</div>
      </div>
    </div>
  );
}
