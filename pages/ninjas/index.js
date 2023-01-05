import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninja All</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link className={styles.single} href={"/ninjas/" + ninja.id}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
