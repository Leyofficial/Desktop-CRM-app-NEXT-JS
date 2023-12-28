'use client'

import React from "react";
import {PropSidebar} from "@/types/SideBarTypes/SideBarTypes";

export function Sidebar({list} : PropSidebar){
    return (
        <div className="w-[90px] h-[820px] relative bg-slate-50 bg-opacity-90">
            <div className="left-[20px] top-[20px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[50px] h-[50px] p-[15px] bg-indigo-600 rounded-[50px] justify-center items-center inline-flex">
                    <div className="w-5 h-5 px-[2.08px] py-[1.67px] justify-center items-center inline-flex" />
                </div>
                <div className="w-[50px] h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                    <div className="w-5 h-5 px-[1.25px] py-px justify-center items-center inline-flex" />
                </div>
                <div className="w-[50px] h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                    <div className="w-5 h-5 pl-[1.33px] pr-[1.48px] pt-px pb-[1.21px] justify-center items-center inline-flex" />
                </div>
                <div className="w-[50px] h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                    <div className="w-5 h-5 px-[2.65px] py-[3.06px] justify-center items-center inline-flex" />
                </div>
                <div className="w-[50px] h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                    <div className="w-5 h-5 px-[1.88px] py-px justify-center items-center inline-flex" />
                </div>
                <div className="w-[50px] h-[50px] relative bg-white rounded-[50px] border border-slate-200">
                    <div className="w-5 h-5 pl-[2.69px] pr-[2.70px] py-px left-[15px] top-[15px] absolute justify-center items-center inline-flex" />
                    <div className="w-2.5 h-2.5 left-[25px] top-[15px] absolute">
                        <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-indigo-600 rounded-[10px] border-2 border-white" />
                    </div>
                </div>
                <div className="w-[50px] h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                    <div className="w-5 h-5 px-px pt-[1.51px] pb-[1.50px] justify-center items-center inline-flex" />
                </div>
            </div>
            <div className="w-px h-[820px] left-[89px] top-0 absolute bg-slate-200" />
        </div>
    )
}