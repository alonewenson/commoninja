import { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.pageContainer}>{children}</main>
    </div>
  );
};

export default Layout;
