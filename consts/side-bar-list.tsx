import {BiSolidDashboard} from "react-icons/bi";
import {IList} from "@/types/SideBarTypes/SideBarTypes";
import {HiOutlineBriefcase} from "react-icons/hi";
import {HiMiniUsers} from "react-icons/hi2";
import {BsListTask} from "react-icons/bs";

export const sideBarList: IList[] = [
    {
        icon: <BiSolidDashboard fontSize={'1.5rem'} />,
        href: '/'
    },
    {
        icon: <HiOutlineBriefcase fontSize={'1.5rem'} />,
        href: '/deals'
    },
    {
        icon : <HiMiniUsers fontSize={'1.5rem'} />,
        href : '/customers'
    },
    {
        icon : <BsListTask fontSize={'1.5rem'} />,
        href  : '/tasks',
    }

]