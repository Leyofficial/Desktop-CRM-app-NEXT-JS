'use client'
import {PropToDo} from "@/types/ToDoTypes/ToDoTypes";
import {useEffect, useState} from "react";
import {PiWarningOctagonFill} from "react-icons/pi";
import {IoCheckmarkDoneCircle} from "react-icons/io5";

export function ToDoItem({status , date , task} : PropToDo) {
    const [color , setColor] = useState('text-slate-400');
    const [icon , setIcon ] = useState<any>(null);
    useEffect(() => {
        switch (status) {
            case "pending": {
                setColor('text-slate-400')
                break
            }
            case "expired": {
                setColor('text-red-400')
                setIcon(<PiWarningOctagonFill />)
                break
            }
            case "done": {
                setColor('text-green-400')
                setIcon(<IoCheckmarkDoneCircle />)
                break
            }
        }
    }, [status]);
    return (
        <section className={'flex items-center gap-4'}>
            <div className={`w-[110px] h-[27px] ${color} flex items-center gap-2  font-normal font-['Inter'] leading-[27px]`}>
                <p>{date}</p>
                {icon ? icon : null}
            </div>
            <div className="w-[201px] text-sky-950  font-normal font-['Inter'] leading-[27px]">{task}</div>
        </section>
    )
}