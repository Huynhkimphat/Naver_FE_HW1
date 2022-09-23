import Image from "next/image";
import Logo from "../../static/logo.png";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const styles = {
  wrapper: "flex justify-center gap-10 p-5 ",
  content:
    "max-w-7xl flex-1 flex justify-between items-center flex-col sm:flex-row gap-y-4 sm:gap-y-0",
  logoContainer: "flex-start hidden sm:flex",
  logo: "cursor-pointer object-contain",
  iconConainer: "flex gap-x-8",
  icon: "text-2xl text-[#FA4A0C]",
  footerTitle: "sm:text-sm text-xs",
};

const Footer = () => {
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
        <div className={styles.iconConainer}>
          <div className={styles.icon}>
            <SiTwitter />
          </div>
          <div className={styles.icon}>
            <SiFacebook />
          </div>
          <div className={styles.icon}>
            <SiLinkedin />
          </div>
        </div>
        <div className={styles.footerTitle}>
          Copywright 2020 Bella Onojie.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
