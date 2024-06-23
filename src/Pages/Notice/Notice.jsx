import { MdOutlineCampaign } from "react-icons/md";
import { FaRegUser, FaUsersBetweenLines } from "react-icons/fa6";
import Piechart from "../../Components/dashboard/Piechart/Piechart";
import { IoBarChartSharp, IoStatsChartSharp } from "react-icons/io5";
import { BiPieChartAlt2 } from "react-icons/bi";
import BarCharts from "../../Components/dashboard/BarChart/BarCharts";
import LineCharts from "../../Components/dashboard/LineChart/LineChart";
import { BsThreeDotsVertical } from "react-icons/bs";

const Notice = () => {
  return (
    <div className="w-full mx-auto margin_top margin_bottom">
      <div className="md:grid grid-cols-2 _gap">
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Text</h6>
          </div>
          <p className="p-3 text-justify font_standard">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Text</h6>
          </div>
          <p className="p-3 text-justify font_standard">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-4 _gap margin_top">
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Text</h6>
          </div>
          <p className="p-3 text-justify font_standard">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Text</h6>
          </div>
          <p className="p-3 text-justify font_standard">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden relative"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Footer</h6>
          </div>
          <p className="p-3 text-justify font_standard">প্রতিষ্ঠানের ডাটা</p>
          <div className="flex border_bg card_header justify-start items-center gap-2 absolute w-full bottom-0">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Footer</h6>
          </div>
        </div>
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Text</h6>
          </div>
          <p className="p-3 text-justify font_standard">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-3 _gap margin_top">
        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-start items-center gap-2">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold">Card With Line</h6>
          </div>
          <LineCharts />
        </div>

        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div className="flex border_bg card_header justify-between items-center gap-2">
            <div className="flex items-center gap-2">
            <IoBarChartSharp className="text-xl" />
              <h6 className="font-bold">Card With Line Chart</h6>
            </div>
              <BsThreeDotsVertical className="text-xl" />
          </div>
          <BarCharts />
        </div>

        <div
          style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
          className="card_bg text_color rounded_primary overflow-hidden"
        >
          <div
            className="flex border_bg card_header justify-between items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <IoBarChartSharp className="text-xl" />
              <h6 className="font-bold text-lg  mt-[3px]">Earning Report</h6>
            </div>
            <BsThreeDotsVertical className="text-xl" />
          </div>
          <div className="max-w-[320px] mx-auto">
          <Piechart />
          </div>
        </div>
      </div>
      {/* <ReactDataTable/> */}
    </div>
    // <div></div>
  );
};

export default Notice;
