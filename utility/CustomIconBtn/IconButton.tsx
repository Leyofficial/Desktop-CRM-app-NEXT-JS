'use client'
import {IList} from "@/types/SideBarTypes/SideBarTypes";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function IconButton({icon , href} : IList){
    const link = usePathname();
    return (
        <Link href={href} className={` ${href === link ? ' bg-indigo-600 text-white' :  'bg-white'}  w-[50px] h-[50px] p-2 rounded-[50px] border border-slate-200 justify-center items-center inline-flex cursor-pointer`}>
            <div className="w-5 h-5 px-[1.25px] py-px justify-center items-center inline-flex" >
                {
                    icon
                }</div>
        </Link>
    )
}