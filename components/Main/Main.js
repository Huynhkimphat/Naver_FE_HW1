import Card from "./Card/Card";
import Phone3 from "../../static/phone3.png";
import Phone4 from "../../static/phone4.png";
import Phone5 from "../../static/phone5.png";
import DownloadContent from "./DownloadContent/DownloadContent";

const styles = {
  wrapper: "mx-auto",
  title: "font-bold text-center text-3xl py-8 mb-[4rem]",
};

export default function Main() {
  const dataSets = [
    {
      id: 1,
      subTitle: "Create an account",
      title: "Create/login to an existing account to get started",
      detail: "An account is created with your email and a desired password",
      photo: Phone3,
      isRevert: false,
    },
    {
      id: 2,
      subTitle: "Explore varieties",
      title: "Shop for your favorites meal as e dey hot.",
      detail:
        "Shop for your favorite meals or drinks and enjoy while doing it.",
      photo: Phone4,
      isRevert: true,
    },
    {
      id: 3,
      subTitle: "Checkout",
      title: "When you done check out and get it delivered.",
      detail: "When you done check out and get it delivered with ease.",
      photo: Phone5,
      isRevert: false,
    },
  ];
  const listContentItems = dataSets.map((item) => (
    <Card key={item.id} item={item} />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>How the app works</div>
      {listContentItems}
      <DownloadContent />
    </div>
  );
}
