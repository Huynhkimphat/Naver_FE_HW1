import Image from "next/image";
import Logo from "../../static/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const styles = {
  wrapper: "flex justify-center gap-10 p-5 ",
  content: "max-w-10xl flex-1 flex justify-between gap-10",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav:
    "hidden cursor-pointer items-center space-x-5 font-semibold sm:flex",
  button: `py-2 px-4 `,
  activeButton: `text-[#FA4A0C] py-2 px-4`,
  hamburgerMenu: "sm:hidden flex items-center px-4",
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt={""}
          />
        </div>
        <div className={styles.bannerNav}>
          <div className={styles.activeButton}>Home</div>
          <div className={styles.button}>Product</div>
          <div className={styles.button}>Faq</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.hamburgerMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
