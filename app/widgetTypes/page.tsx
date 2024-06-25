import { fetchFromCommonNinja } from "../services/api";
import { WidgetType } from "@/types";
import List from "../components/itemList/list";
import Layout from "../components/layout/layout";

const WidgetTypes = async () => {
  const widgetTypes: WidgetType[] = await fetchFromCommonNinja("widget-types");

  return (
    <Layout>
      <List items={widgetTypes} title="Widget Types"/>
    </Layout>
  );
};

export default WidgetTypes;
