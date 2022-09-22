const styles = {
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  content:
    "max-w-7xl flex-1 flex items-center justify-between flex-col sm:mt-[5rem] mt-4",
  wrapper:
    "h-max-[10rem] flex items-center justify-center sm:bg-[url('/static/banner.png')] sm:border-y sm:border-black bg-cover bg-no-repeat",
  title:
    "sm:text-white sm:text-6xl text-4xl text-center p-3 max-w-[52rem] font-bold sm:leading-[5rem] leading-[3rem]",
  subTitle:
    "p-3 sm:font-bold sm:text-white sm:text-2xl font-semibold text-xl text-[#737373] ",
  label: "p-3 sm:text-white text-[#737373]",
  buttonContainer:
    "flex pt-8 pb-8 mb-[8rem] justify-between items-center sm:w-[28rem] flex-col sm:flex-row gap-y-4 ",
  accentedButton:
    "py-2 sm:py-4 px-8 rounded-full bg-[#FA4A0C] text-xl font-semibold  text-center text-white sm:w-[12rem]",
  button:
    " py-2 sm:py-4 px-8 rounded-full  text-xl font-semibold border-solid border-2 sm:border-white border-[#FA4A0C] text-center sm:text-white text-[#FA4A0C] sm:w-[12rem]",
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
