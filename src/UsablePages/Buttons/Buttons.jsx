import Title from "../../Utility/TItle/Title";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
    { key: "Dashboard", content: "Dashboard", link: true },
    { key: "Component", content: "Component", link: true },
    { key: "Button", content: "Button", active: true },
];

const Buttons = () => {
    return (
        <div>
            <div>
                <Breadcrumb icon="right angle" sections={sections} />
            </div>
            <Title title='Button' />
            {/* primary button */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="btn_primary">Button Primary</button>
                <button className="btn_secondary">Button Secondary</button>
                <button className="btn_success">Button Success</button>
                <button className="btn_danger">Button Danger</button>
                <button className="btn_warning">Button Warning</button>
                <button className="btn_info">Button Info</button>
                <button className="btn_dark">Button Dark</button>

            </div>
          
        </div>
    );
};

export default Buttons;