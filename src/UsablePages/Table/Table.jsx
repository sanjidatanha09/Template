import { BsThreeDotsVertical } from "react-icons/bs";
import FilterDropdown from "./FilterDropdown";
import TableModal from "./TableModal";
import { Breadcrumb } from "semantic-ui-react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const sections = [
  { key: "Dashboard", content: "Dashboard", link: true },
  { key: "Component", content: "Component", link: true },
  { key: "Table", content: "Table", active: true },
];
{
  /* <div>
  <Breadcrumb icon="right angle" sections={sections} />
</div> */
}

const Table = () => {
  const [popOpen, setPopOpen] = useState(false);

  return (
    <div>
      <section>
        <div>
          <Breadcrumb icon="right angle" sections={sections} />
        </div>
        <div>
          <div className=" dark:border-none rounded-md dark:bg-[#2F3349] py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full">
              <div className="flex flex-col top_header_bg md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:bg-gray-500 bg-[#DDDBFB] mb-4 w-full ">
                <div className="flex">
                  <button className=" font_title btn_table text_color font-bold duration-500">
                    All(0)
                  </button>
                  <button className="font_title btn_table text_color font-bold duration-500">
                    Active(1)
                  </button>
                  <button className="font_title btn_table text_color font-bold duration-500">
                    Inactive(0)
                  </button>
                </div>
                <TableModal />
              </div>
            </div>

            <div className="overflow-x-auto min-h-[30vh] ">
              <table className="table border border_bg ">
                {/* head */}
                <thead className="h-[40px]">
                  <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                    <th className="font_standard table_border border">Name</th>
                    <th className="font_standard table_border border">
                      status
                    </th>
                    <th className="font_standard table_border border">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" text-center">
                  <tr>
                    <td
                      className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                    >
                      Beauty
                    </td>
                    <td className="border ">
                      <button className="rounded-sm bg_status_success font-semibold border-none font_standard">
                        Active
                      </button>
                    </td>
                    <td className="border ">
                      <button className="rounded-md border-none py-0 px-2 relative">
                        {/* <FilterDropdown /> */}
                        <BsThreeDotsVertical
                          onClick={() => setPopOpen(!popOpen)}
                          className="text-2xl font-bold text_color"
                        />
                        <div
                          className={`card_bg w-44 border border_bg absolute opacity-0 ${
                            popOpen && "opacity-100"
                          } right-[14px] top-[24px] rounded-md rounded-tr-sm`}
                        >
                          <ul className="text_color text-left">
                            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                              {" "}
                              <MdEdit /> Edit
                            </li>
                            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                              <MdDelete /> Delete
                            </li>
                            <li className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2">
                              <IoMdEye /> View
                            </li>
                          </ul>
                        </div>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
