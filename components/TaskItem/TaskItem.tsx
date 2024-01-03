"use client"
import {ITodoTypes} from "@/types/TaskItemTypes/TaskItemTypes";
import {Td, Tr} from "@chakra-ui/table";
import {FiEdit3} from "react-icons/fi";
import {useEffect, useState} from "react";
import {PiWarningOctagonFill} from "react-icons/pi";
import {IoCheckmarkDoneCircle} from "react-icons/io5";

export function TaskItem({todos , onClick} : {todos : ITodoTypes , onClick : () => void} ) {
    const {status , date , task} = todos

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
                setIcon(<PiWarningOctagonFill fontSize={'1.3rem'}/>)
                break
            }
            case "done": {
                setColor('text-green-400')
                setIcon(<IoCheckmarkDoneCircle fontSize={'1.3rem'}/>)
                break
            }
        }
    }, [status]);
    function handleClick(e : any) {
        if (e?.target?.id === 'editBtn') return
    }
    return (

        <Tr onClick={handleClick}>
            <Td>
                <div className={`${color}`}>{icon ? icon : null}</div>
            </Td>
            <Td>
                <div className={`${color}`}>{date}</div>
            </Td>
            <Td>
                <div>{task}</div>
            </Td>
            <Td >
                <div className={'text-slate-400 cursor-pointer'}>
                    <FiEdit3  onClick={onClick} id={'editBtn'}  fontSize={'1.7rem'}/>
                </div>
            </Td>
        </Tr>
    )
}