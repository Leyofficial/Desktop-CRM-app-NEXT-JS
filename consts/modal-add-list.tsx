import {HiOutlineBriefcase} from "react-icons/hi";
import {HiMiniUsers} from "react-icons/hi2";
import {BsListTask} from "react-icons/bs";
import {PropModalAddItem} from "@/types/ModalTypes/ModalTypes";

export const modalAddList : PropModalAddItem[] = [
    {
        icon : <HiOutlineBriefcase fontSize={'1.5rem'} />,
        title : 'Deal'
    },
    {
        icon : <HiMiniUsers fontSize={'1.5rem'} />,
        title : 'Customer'
    },
    {
        icon :<BsListTask fontSize={'1.5rem'}/>,
        title : 'Task'
    }
]