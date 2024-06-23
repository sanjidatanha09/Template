import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
// import NewRole from "../Pages/NewRole/NewRole";
import LoginPage from "../Pages/LoginPage/LoginPage";
import FormElements from "../UsablePages/FormElements/FormElements";
import Modal from "../UsablePages/Modal/Modal";
import Card from "../UsablePages/Card/Card";
import DataTable from "../UsablePages/DataTable/DataTable";
import Table from "../UsablePages/Table/Table";
import Loader from "../UsablePages/Loader/Loader";
import Buttons from "../UsablePages/Buttons/Buttons";
import PosSell from "../UsablePages/Pos/PosSell";
import PopBar from "../UsablePages/PopBar/PopBar";
import RoleCard from "../UsablePages/RoleCard/RoleCard";
// import InvoiceList from "../UsablePages/InvoiceManagement/InvoiceList";
import LeadProfile from "../UsablePages/LeadProfile/LeadProfile";
import CreateInvoice from "../UsablePages/InvoiceManagement/CreateInvoice";
import FlipBook from "../UsablePages/FlipBook/FlipBook";
import InvoicePdf from "../UsablePages/InvoicePdf/InvoicePdf";
import InvoiceView from "../UsablePages/InvoiceView/InvoiceView";
import Profile from "../UsablePages/Profile/Profile";
import NewExpenseReceipt from "../UsablePages/newExpenseReceipt/NewExpenseReceipt";
// import PrivetRoute from "../Security/PrivetRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Notice />
            },
            // Fresh Route
            {
                path: '/formElements',
                element: <FormElements />
            },
            {
                path: '/button',
                element: <Buttons />
            },
            {
                path: '/modal',
                element: <Modal />
            },
            {
                path: '/cards',
                element: <Card />
            },
            {
                path: '/dataTables',
                element: <DataTable />
            },
            {
                path: '/tables',
                element: <Table />
            },
            {
                path: '/loader',
                element: <Loader />
            },
            {
                path: '/loginPage',
                element: <LoginPage />
            },
            {
                path: '/pos',
                element: <PosSell />
            },
            {
                path: '/popBar',
                element: <PopBar />
            },
            {
                path: '/roleCard',
                element: <RoleCard />
            },
            //25-04-24 CreateInvoice LeadProfile
            
            {
                path: '/createInvoice',
                element: <CreateInvoice />
            },
            {
                path: '/LeadProfile',
                element:<LeadProfile />
            },
            {
                path: '/flipBook',
                element:<FlipBook />
            },
            {
                path: '/invoicePdf',
                element: <InvoicePdf />
            },
            {
                path: '/invoiceView',
                element: <InvoiceView />
            },
            {
                path: '/profile',
                element:<Profile />
            }
            ,
            {
                path: '/newExpenseReceipt',
                element: <NewExpenseReceipt />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])

export default Router;