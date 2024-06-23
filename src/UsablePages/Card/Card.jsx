import { FaUsersBetweenLines } from "react-icons/fa6";
import Title from "../../Utility/TItle/Title";
import { MdOutlineCampaign } from "react-icons/md";
import { Breadcrumb } from "semantic-ui-react";

const sections = [
  { key: "Dashboard", content: "Dashboard", link: true },
  { key: "Component", content: "Component", link: true },
  { key: "Cards", content: "Cards", active: true },
];


const Card = () => {
  return (
    <div>
      <div>
        <Breadcrumb icon="right angle" sections={sections} />
      </div> 
      <Title title="Cards" />
      <section>
          <div className="md:grid grid-cols-2 justify-center items-center gap-4">
            <div style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }} className="card_bg text_color rounded_primary overflow-hidden" >
              <div className="flex p-4 py-2 dark:border-none card_header justify-start items-center gap-2">
                <MdOutlineCampaign className="text-2xl" />
                <h6 className="font-bold">Card With Text</h6>
              </div>
              <p className="p-3 text-justify font_standard">
                প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
                অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে
                ইনাক্টিভ করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি
                পুনরায় চালু করা যেতে পারে।
              </p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Card;
