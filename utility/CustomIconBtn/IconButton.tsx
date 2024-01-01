'use client'
import {IList} from "@/types/SideBarTypes/SideBarTypes";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function IconButton({icon , href} : IList){
    const link = usePathname();
    return (
        <Link href={href} className={`${ link === href ? ' bg-indigo-600 text-white' : 'bg-white'} p-2  rounded`}>
                {icon}
        </Link>

    )
}