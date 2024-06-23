import { RiHomeSmile2Line, RiPagesLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import {  MdOutlineDashboard, MdOutlineLocalMall, MdOutlineMedicalInformation } from "react-icons/md";
import {  IoSettingsOutline } from "react-icons/io5";
import { BiPrinter } from "react-icons/bi";
export const SIderberNavLinks = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: '/',
                menu: 'Dashboard',
                access: 'Collapsed-menu',
                icon: MdOutlineDashboard,
                dropDown: false,
            },
        ]
    },
    {
        title: false,
        NavItems: [ {
            link: false,
            menu: 'Components',
            icon: RiHomeSmile2Line,
            dropDown: [
                {
                    link: '/formElements',
                    menu: 'From Elements',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: '/button',
                    menu: 'Button',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: '/modal',
                    menu: 'Modal',
                    icon: FaRegCircle,
                    access: 'Content-Navbar',
                    subMenu: false
                },
                {
                    link: '/cards',
                    menu: 'Cards',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/dataTables',
                    menu: 'Data table',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/tables',
                    menu: 'Table',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/loginPage',
                    menu: 'Login Page',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/loader',
                    menu: 'Loader',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/pos',
                    menu: 'Pos',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/popBar',
                    menu: 'Pop Bar',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/roleCard',
                    menu: 'Role Card',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/CreateInvoice',
                    menu: 'Create Invoice',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/LeadProfile',
                    menu: 'Lead Profile',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/invoiceView',
                    menu: 'Invoice View',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/invoicePdf',
                    menu: 'Invoice Pdf',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },

            ]
        },]
    } 
]
export const SIderberNavLinksbl = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: '/',
                menu: 'ড্যাশবোর্ড',
                access: 'Collapsed-menu',
                icon: MdOutlineDashboard,
                dropDown: false,
            },
        ]
    },
    {
        NavItems: [ {
            link: false,
            menu: 'উপাদান',
            icon: RiHomeSmile2Line,
            dropDown: [
                {
                    link: 'formElements',
                    menu: 'ফর্ম এলিমেন্ট',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: "/button",
                    menu: 'বাটন',
                    icon: FaRegCircle,
                    access: 'Collapsed-menu',
                    subMenu: false
                },
                {
                    link: '/modal',
                    menu: 'মোডাল',
                    icon: FaRegCircle,
                    access: 'Content-Navbar',
                    subMenu: false
                },
                {
                    link: '/cards',
                    menu: 'কার্ড',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/tables',
                    menu: 'টেবিল',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/DataTables',
                    menu: 'ডাটা টেবিল',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/loader',
                    menu: 'লোডার',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/loginPage',
                    menu: 'লগইন পেজ',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/popBar',
                    menu: 'পপ বার',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/roleCard',
                    menu: 'রোল কার্ড',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/createInvoice',
                    menu: 'ক্রিয়েট ইনভয়েস',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/pos',
                    menu: 'পস',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/LeadProfile',
                    menu: ' লিড প্রোফাইল',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/viewInvoice',
                    menu: 'প্রোভাইল ভিউ',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                },
                {
                    link: '/invoicePDF',
                    menu: 'ইনভয়েস পিডিএফ',
                    icon: FaRegCircle,
                    access: 'Content-Nav-Sidever',
                    subMenu: false
                }

            ]
        },]
    }
]

