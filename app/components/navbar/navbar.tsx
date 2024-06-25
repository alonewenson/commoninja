import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.button} href={"/widgets"}>
        Widgets
      </Link>
      <Link className={styles.button} href={"/projects"}>
        Projects
      </Link>
      <Link className={styles.button} href={"/widget Types"}>
        WidgetTypes
      </Link>
    </nav>
  );
};

export default Navbar;
