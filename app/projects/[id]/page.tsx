import Widgets from "@/app/widgets/page";

const ProjectComponents = ({ params }: { params: { id: string } }) => {
  return <Widgets projetId={params.id} />;
};

export default ProjectComponents;
