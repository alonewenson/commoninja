import { fetchFromCommonNinja } from "../services/api";
import { Widget } from "@/types";
import List from "../components/itemList/list";
import Layout from "../components/layout/layout";

const Widgets = async ({ projetId }: { projetId?: string }) => {
  const url = projetId ? `widgets?projectId=${projetId}` : "widgets";
  const widgets: Widget[] = await fetchFromCommonNinja(url);

  return (
    <Layout>
      <List items={widgets} linkRoute="widgets" />
    </Layout>
  );
};

export default Widgets;
