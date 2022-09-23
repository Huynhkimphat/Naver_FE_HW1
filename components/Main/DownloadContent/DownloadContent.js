const styles = {
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  content:
    "max-w-7xl flex-1 flex items-center justify-between flex-col mt-4 sm:mt-[5rem]",
  wrapper:
    "h-max-[10rem] w-screen flex items-center justify-center bg-[#252B42] bg-cover bg-no-repeat sm:border-y sm:border-black sm:bg-[url('/static/downloadBg.png')]",
  title:
    "text-4xl text-center p-3 max-w-[52rem] font-bold leading-[3rem] sm:leading-[5rem] text-white sm:text-6xl",
  label: "p-3 text-[#737373] sm:text-white text-center",
  buttonContainer:
    "flex pt-8 pb-8 mb-[8rem] justify-center sm:gap-x-4 items-center flex-col gap-y-4 sm:gap-y-0 sm:w-[28rem] sm:flex-row",
  accentedButton:
    "py-2 px-8 rounded-lg bg-[#FA4A0C] text-xl font-semibold text-center text-white sm:w-[12rem] sm:py-4 border-2 border-[#FA4A0C]",
  button:
    " py-2 px-8 rounded-lg text-xl font-semibold border-solid border-2 border-[#FA4A0C] text-center text-[#FA4A0C] sm:text-white sm:w-[12rem] sm:py-4 sm:border-white",
};

const DownloadContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Download the app now.</div>
        <div className={styles.label}>
          Available on your favorite store. Start your premium experience now
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.accentedButton}>Playstore</div>
          <div className={styles.button}>App store</div>
        </div>
      </div>
    </div>
  );
};

export default DownloadContent;
