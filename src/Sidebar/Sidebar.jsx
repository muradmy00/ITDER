import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleOpen = (id) => {
        setOpenDropdown((prevIdx) => (prevIdx === id ? null : id));
    };
    return (
        <div>
            <div
                style={{ boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)" }}
                className="bg-_white rounded-md border"
            >
                <ul className=" space-y-[2px] w-full">
                    <li
                        className=" rounded-md bg-_white p-pl_primary group hover:cursor-pointer duration-200 "
                    >
                        <div
                            onClick={() => handleOpen(1)}
                            className="flex items-center justify-between px-p_md py-p_xs  duration-200  pt-pt_primary  pb-pb_primary "
                        >
                            <p className="">
                                Pages
                            </p>
                            <MdKeyboardArrowDown
                                className={`${openDropdown === 1 ? "rotate-180 text-2xl" : "text-2xl "
                                    } transition-all duration-500`}
                            />
                        </div>
                        <ul
                            className={`space-y-1 ${openDropdown === 1 ? "max-h-[400px]" : "max-h-0"
                                } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                        >
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/examSheet"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Exam Sheet
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/featureOverview"
                                    className="flex items-center justify-between gap-g_xs text-text_sm"
                                >
                                    General Knowledge <span className="bg-text_orange text-white text-xs px-pl_primary rounded-sm">Premium</span>
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/ranking"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Ranking
                                </Link>
                            </li>
                            {/* <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/home"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Home
                                </Link>
                            </li> */}
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/nextPage"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Book Layout
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/questions"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Questions
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/details"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Details
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/examSheet"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    ExamSheet
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    DashboardAccount
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/login"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="9 px-p_md py-p_xs hover:cursor-pointer  duration-200  py-pt_primary bg-bg_state text-_black px-pl_primary rounded-rounded_primary">
                                <Link
                                    to="/register"
                                    className="flex items-center gap-g_xs text-text_sm"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;