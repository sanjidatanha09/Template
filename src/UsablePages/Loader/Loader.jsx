import { Vortex } from "react-loader-spinner";
import Title from "../../Utility/TItle/Title";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
  { key: "Dashboard", content: "Dashboard", link: true },
  { key: "Component", content: "Component", link: true },
  { key: "Loader", content: "Loader", active: true },
];
{/* <div>
  <Breadcrumb icon="right angle" sections={sections} />
</div> */}
const Loader = () => {
  return (
    <div>
      <div>
        <Breadcrumb icon="right angle" sections={sections} />
      </div>
      <Title title="Loader" />
      <div className="md:flex items-start gap-4">
      <div>
      <h3 className="text-base">Button Loader</h3>
        <div className="flex justify-center">
          <Vortex
            visible={true}
            height="30"
            width="30"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
      </div>
        </div>
        <div>
          <h3 className="text-base">Main Loader</h3>
          <div className="flex justify-center">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
