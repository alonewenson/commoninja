import { FC } from "react";
import styles from "./list.module.css";
import Link from "next/link";
import { ItemProps } from "./item";
import Item from "./item";

interface ListProps {
  items: ItemProps[];
  linkRoute?: string;
}

const List: FC<ListProps> = ({ items, linkRoute }) => {
  return (
    <div>
      <ul className={styles.list}>
        {items.map((item) => {
          const itemId = item.id || item.projectId;
          return (
            <li className={styles.listItem} key={itemId}>
              {linkRoute ? (
                <Link href={`/${linkRoute}/${itemId}`}>
                  <Item {...item} />
                </Link>
              ) : (
                <div>
                  <Item {...item} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
