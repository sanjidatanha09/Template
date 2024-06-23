import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import BtnWithIcon from "../../Components/Shared/Btn/BtnWithIcon";
import { CiCalendar } from "react-icons/ci";
import { Calendar } from "primereact/calendar";
import Btn from "../../Components/Shared/Btn/Btn";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function FilterDropdown() {
  const [sDate, setSDate] = useState(null);
  const [eDate, setEDate] = useState(null);

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex ">
            <BsThreeDotsVertical className="text-2xl font-bold text_color" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 mt-2 w-32 origin-top-right divide-y  rounded-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center px-2 py-2 text-base`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center px-2 py-2 text-base`}
                  >
                    Inactive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center px-2 py-2 text-base`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
