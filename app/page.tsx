import Image from "next/image";
import styles from './page.module.css'
import Button from "./Components/Button";

export default function home() {
  return (
   <div className={styles.container}>
    <Button type="secondary" title="Cancel" className={styles.secondary}></Button>
    <Button type="primary" title="Done" className={styles.primary}></Button>
   </div>
  );
}

