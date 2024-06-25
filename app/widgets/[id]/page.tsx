"use client"
import Layout from "../../components/layout/layout";
import styles from "./item.module.css";


const WidgetItem =  ({ params }: { params: { id: string } }) => {
  const className = `commonninja_component pid-${params.id}`
  return (
    <Layout>
      <div className={styles.item}>
      <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
      <div className={className}></div>
      </div>
    </Layout>
  );
};

export default WidgetItem;
