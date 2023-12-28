import {BiSolidDashboard} from "react-icons/bi";
import {IList} from "@/types/SideBarTypes/SideBarTypes";
import {HiOutlineBriefcase} from "react-icons/hi";
import {HiMiniUsers} from "react-icons/hi2";
import {BsListTask} from "react-icons/bs";

export const sideBarList: IList[] = [
    {
        icon: <BiSolidDashboard/>,
        href: '/'
    },
    {
        icon: <HiOutlineBriefcase/>,
        href: '/deals'
    },
    {
        icon : <HiMiniUsers />,
        href : '/customers'
    },
    {
        icon : <BsListTask />,
        href  : '/tasks',
    }

]