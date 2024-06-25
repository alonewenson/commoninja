import { fetchFromCommonNinja } from "../services/api";
import { Project } from "@/types";
import List from "../components/itemList/list";
import Layout from "../components/layout/layout";

const Projects = async () => {
  const projects: Project[] = await fetchFromCommonNinja("projects");
  return (
    <Layout>
      <List items={projects} linkRoute="projects"/>
    </Layout>
  );
};

export default Projects;
