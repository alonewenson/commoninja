import { FC } from "react";
import styles from "./item.module.css";
import Image from "next/image";

export interface ItemProps {
  name: string;
  id?: string;
  projectId?: string;
  logo?: string;
  status?: string;
  created?: string;
}

const Item : FC<ItemProps> = ({ name, projectId, logo, status, created }) => {
  return (
    <div>
      {logo && (
        <Image
          src={logo}
          alt={name}
          width={80}
          height={80}
          className={styles.image}
        />
      )}
      <p className={styles.name}>{name}</p>
      {projectId && (
        <p className={styles.detail}>Project ID: {projectId}</p>
      )}
      {status && <p className={styles.detail}>Status: {status}</p>}
      {created && (
        <p className={styles.detail}>Created At: {created}</p>
      )}
    </div>
  );
};

export default Item;
