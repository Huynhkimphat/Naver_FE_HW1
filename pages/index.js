import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import PhotoGroup from "../components/PhotoGroup/PhotoGroup";
import Divider from "../components/Divider/Divider";

const styles = {
  wrapper: "mx-auto",
  phoneContainer:
    "flex items-center justify-center flex-start ml-[-6rem] mt-4 sm:mt-0",
  phone1Container:
    "object-cover sm:w-299 sm:h-586 mt-[-18rem] mr-[-3rem] w-200",
  phone2Container:
    "object-cover sm:w-299 sm:h-586 mt-[-12rem] ml-[-12rem] w-200",
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <PhotoGroup />
      <Divider />
    </div>
  );
}
