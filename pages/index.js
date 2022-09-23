import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import PhotoGroup from "../components/PhotoGroup/PhotoGroup";
import Divider from "../components/Divider/Divider";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const styles = {
  wrapper: "mx-auto",
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <PhotoGroup />
      <Divider />
      <Main />
      <Footer />
    </div>
  );
}
