'use client'
import {useEffect, useState} from "react";
import {PropCounter} from "@/types/CounterTypes/counter";
import {HiOutlineBriefcase} from "react-icons/hi";

export function DealsCounter({numberOfPeople , title} :PropCounter){
    const [isActive , setActive] = useState<boolean>()
    useEffect(() => {
        if (numberOfPeople === 0) {
            setActive(false)
        } else {
            setActive(true)
        }
    }, [numberOfPeople]);

    return (
        <div className={`relative border border-b-emerald-50-50 rounded-md p-8 flex-col justify-start items-start inline-flex`}>
            <div className="text-slate-400 text-lg font-medium font-['Inter'] leading-[30px]">{title}</div>
            <div className={'flex w-full justify-between'}>
                <div className={`${!isActive ? 'text-slate-400' : 'text-sky-950'} text-5xl font-semibold font-['Manrope'] leading-[80px]`}>{numberOfPeople}</div>
                <div className={`${!isActive ? "bg-gradient-to-r from-7E92A2 to-white text-slate-400" : 'bg-gradient-to-b from-rose-400 to-white text-red-500'} w-20 h-20 p-6 rounded-[100px] justify-center items-center inline-flex`}>
                    <div className="grow shrink basis-0 self-stretch pl-[2.61px] pr-[2.67px] py-[2.67px] justify-center items-center inline-flex" >
                        <HiOutlineBriefcase fontSize={'2.5rem'} />
                    </div>
                </div>
            </div>
        </div>
    )
}