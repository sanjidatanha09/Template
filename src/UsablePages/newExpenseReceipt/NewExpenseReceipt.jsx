import { FaAlignRight } from "react-icons/fa";
import SelectExpense from "./SelectExpense";

const NewExpenseReceipt = () => {
    return (
        <>
            <div className="margin_top">
                <div className="flex flex-col md:flex-row w-[96%] mx-auto md:w-[100%] _gap mb-20 card_bg font_standard ">
                    {/* first part */}
                    <div
                        className="card_bg md:w-8/12 lg:w-9/12 text_color rounded_primary overflow-hidden border_bg border padding_bottom"
                        style={{ boxShadow: " 0 1px 1px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="flex flex-col md:flex-row justify-between px-5 pt-5 gap-2 md:gap-20 lg:gap-2">
                            <div className="mb-3 w-[90%] md:w-full lg:w-[60%] 2xl:w-72 h-[150px] overflow-hidden ">
                                <img
                                    className="w-full h-full object-cover md:object-contain"
                                    src="https://cashbaksho.com/backend/billing_invoice_logo.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col lg:items-end lg:w-[40%] my-4 lg:my-0 ">
                                <div className="padding_top w-full flex _gap items-center">
                                    <span className="text_color font_standard w-full text-right">Invoice Generate</span>
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue='12/11/2000'
                                        className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                        placeholder="Search Here"
                                        required
                                    />
                                </div>
                                <div className="marginTop_4px  w-full flex _gap items-center">
                                    <span className="text_color font_standard w-full text-right">Invoice Generate</span>
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue='12/11/2000'
                                        className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                        placeholder="Search Here"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                       
                        <hr className="border_bg margin_bottom margin_top" />

                        {/* service item */}

                        <div className="px-4">
                            <h2 className="font_standard">Service Item</h2>
                            <div className="gap-3 border border_bg overflow-x-auto">
                                <table className="table border border_bg">
                                    {/* head */}
                                    <thead className="h-[40px]">
                                        <tr className="uppercase text-center h-[40px] table_header_bg font-bold text_color font_title">
                                            <th className="font_standard table_border border">Service</th>
                                            <th className="font_standard table_border border">QTY</th>
                                            <th className="font_standard table_border border">
                                                Unite Price
                                            </th>
                                            <th className="font_standard table_border border">Discount</th>
                                            <th className="font_standard table_border border">
                                                Total Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className=" text-center">
                                        <tr>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                Beauty
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                02
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                500
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                50
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                950
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                Beauty
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                02
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                500
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                50
                                            </td>
                                            <td
                                                className={`pt-2 font_standard whitespace-nowrap text-center border  text_color `}
                                            >
                                                950
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr className="border_bg margin_top" />
                        <div className='flex flex-col  md:flex-row justify-between margin_top padding_left padding_right'>
                            <h6 className='font_standard'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo!</h6>
                            
                            <div className='flex flex-col items-end gap-2'>
                                <div className="mw-full flex _gap items-center">
                                    <span className="text_color font_standard w-full text-right">Service Qty</span>
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue='2'
                                        className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                        placeholder="Search Here"
                                        required
                                    />
                                </div>

                                <div className="marginTop_4px w-full flex _gap items-center">
                                    <span className="text_color font_standard w-full text-right">Sub Total</span>
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue='2000'
                                        className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                                        placeholder="Search Here"
                                        required
                                    />
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <SelectExpense />
                </div>
            </div>
        </>
    );
};
export default NewExpenseReceipt;
