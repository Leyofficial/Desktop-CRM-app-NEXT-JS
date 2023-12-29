'use client'

import React from "react";
import {PropSidebar} from "@/types/SideBarTypes/SideBarTypes";
import {MdEnergySavingsLeaf} from "react-icons/md";
import {IconButton} from "@/utility/CustomIconBtn/IconButton";

export function Sidebar({list} : PropSidebar){
    return (
        <div className="flex flex-col p-[15px] gap-6 items-center bg-slate-50 bg-opacity-90">
                <div  className="mb-5 w-[46px] h-[46px] p-[11px] text-white bg-sky-950 rounded justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch pl-[3.90px] pr-[3.91px] pt-[2.85px] pb-[2.10px] justify-center items-center inline-flex" >
                        <MdEnergySavingsLeaf fontSize={'1.5rem'} />
                    </div>
                </div>
            {list.map((item) =>
                <IconButton key={item.href} icon={item.icon} href={item.href}/>
            )}
        </div>
    )
}