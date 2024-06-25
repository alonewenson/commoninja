import { fetchFromCommonNinja } from "../services/api";
import { Widget } from "@/types";
import List from "../components/itemList/list";
import Layout from "../components/layout/layout";

const Widgets = async () => {
  const widgets: Widget[] = await fetchFromCommonNinja("widgets");

  return (
    <Layout>
      <List items={widgets} title="Widgets" linkRoute="widgets" />
    </Layout>
  );
};

export default Widgets;
