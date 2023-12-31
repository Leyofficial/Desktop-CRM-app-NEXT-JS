'use client'

import React from "react";
import {PropSidebar} from "@/types/SideBarTypes/SideBarTypes";
import {MdEnergySavingsLeaf} from "react-icons/md";
import {IconButton} from "@/utility/CustomIconBtn/IconButton";

export function Sidebar({list} : PropSidebar){
    return (
        <div className="flex flex-col h-screen p-6 gap-6 items-center bg-slate-50 bg-opacity-90">
                <div  className="mb-5  p-2 text-white bg-sky-950 rounded justify-center items-center inline-flex">
                        <MdEnergySavingsLeaf fontSize={'1.5rem'} />
                </div>
            {list.map((item) =>
                <IconButton key={item.href} icon={item.icon} href={item.href}/>
            )}
        </div>
    )
}