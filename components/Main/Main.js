import Card from "./Card/Card";
const styles = {
  wrapper: "mx-auto",
  title: "font-bold text-center text-3xl py-8",
};

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>How the app works</div>
      <Card />
    </div>
  );
}
