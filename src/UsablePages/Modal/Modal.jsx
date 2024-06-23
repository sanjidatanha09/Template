import Title from "../../Utility/TItle/Title";
import ProfileModal from "./ProfileModal/ProfileModal";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
    { key: "Dashboard", content: "Dashboard", link: true },
    { key: "Component", content: "Component", link: true },
    { key: "Modal", content: "Modal", active: true },
];
{/* <div>
    <Breadcrumb icon="right angle" sections={sections} />
</div> */}

const Modal = () => {
    return (
        <div>
            <div>
                <Breadcrumb icon="right angle" sections={sections} />
            </div>
            <Title title='Modal' /> 
           <ProfileModal /> 

        </div>
    );
};

export default Modal;