import Category from "../../Components/Category/Category";
import PosTable from "./PosTable";
import Title from "../../Utility/TItle/Title";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
  { key: "Dashboard", content: "Dashboard", link: true },
  { key: "Component", content: "Component", link: true },
  { key: "Purchase Invoice", content: "Purchase Invoice", active: true },
];
{/* <div>
    <Breadcrumb icon="right angle" sections={sections} />
</div> */}


const PosSell = () => {
  return (
    <div className="">
      <div>
        <Breadcrumb icon="right angle" sections={sections} />
      </div> 
      <Title title='Purchase Invoice' />
      <div className="flex mt-2 flex-col md:items-start md:flex-row">
        <PosTable />
        <div className="md:flex-1 margin_left border border_bg rounded_primary ">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default PosSell;