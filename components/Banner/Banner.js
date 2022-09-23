const styles = {
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  content:
    "max-w-7xl flex-1 flex items-center justify-between flex-col mt-4 sm:mt-[5rem]",
  wrapper:
    "h-max-[10rem] flex items-center justify-center bg-cover bg-no-repeat sm:border-y sm:border-black sm:bg-[url('/static/banner.png')]",
  title:
    "text-4xl text-center p-3 max-w-[52rem] font-bold leading-[3rem] sm:leading-[5rem] sm:text-white sm:text-6xl",
  subTitle:
    "p-3 font-semibold text-xl text-[#737373] sm:font-bold sm:text-white sm:text-2xl",
  label: "p-3 text-[#737373] sm:text-white",
  buttonContainer:
    "flex pt-8 pb-8 mb-[8rem] justify-between items-center flex-col gap-y-4 sm:gap-y-0 sm:w-[28rem] sm:flex-row",
  accentedButton:
    "py-2 px-8 rounded-full bg-[#FA4A0C] text-xl font-semibold text-center border-2 border-[#FA4A0C] text-white sm:w-[12rem] sm:py-4",
  button:
    " py-2 px-8 rounded-full text-xl font-semibold border-solid border-2 border-[#FA4A0C] text-center text-[#FA4A0C] sm:text-white sm:w-[12rem] sm:py-4 sm:border-white",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.subTitle}>Food app</div>
        <div className={styles.title}>
          Why stay hungry when you can order form Bella Onojie
        </div>
        <div
          className={styles.label}
        >{`Download the bella onojie's food app now on`}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.accentedButton}>Playstore</div>
          <div className={styles.button}>App store</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
