import { fetchFromCommonNinja } from "../../services/api";
import { Widget } from "@/types";
import List from "../../components/itemList/list";
import Layout from "../../components/layout/layout";

const ProjectComponents = async ({ params }: { params: { id: string } }) => {
  const widgets: Widget[] = await fetchFromCommonNinja(`widgets?projectId=${params.id}`);

  return (
    <Layout>
      <List items={widgets} linkRoute="widgets" />
    </Layout>
  );
};

export default ProjectComponents;

