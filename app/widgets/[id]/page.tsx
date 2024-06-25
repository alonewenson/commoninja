import Layout from "../../components/layout/layout";

const WidgetItem = ({ params }: { params: { id: string } }) => {
  const className = `commonninja_component pid-${params.id}`;
  return (
    <Layout>
      <div>
        <script
          src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
          defer
        ></script>
        <div className={className}></div>
      </div>
    </Layout>
  );
};

export default WidgetItem;
