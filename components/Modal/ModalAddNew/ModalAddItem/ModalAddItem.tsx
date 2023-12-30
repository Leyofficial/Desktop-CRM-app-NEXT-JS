import React from "react";
import {PropModalAddItem} from "@/types/ModalAddNewTypes/ModalAddNewTypes";
import {IoIosArrowForward} from "react-icons/io";


export function ModalAddItem({icon , title , onClickCallback} : PropModalAddItem) {
    return (
        <div className={'border border-b-slate-50 w-full p-4 flex justify-between items-center'}>
            <section className={'flex gap-3 items-center'}>
                <div className={'text-neutral-500'}>
                    {icon}
                </div>
                <p>
                    {title}
                </p>
            </section>
            <section className={'text-violet-700 cursor-pointer'}>
                <IoIosArrowForward fontSize={'1.5rem'}/>
            </section>
        </div>
    )
}