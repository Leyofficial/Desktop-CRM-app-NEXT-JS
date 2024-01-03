'use client'
import Link from "next/link";
import {ToDoItem} from "@/components/ToDo/ToDoItem/ToDoItem";
import {IoIosArrowForward} from "react-icons/io";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalAddTask} from "@/components/Modal/ModalAddTask/ModalAddTask";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {PropTodo} from "@/types/TaskItemTypes/TaskItemTypes";

export function ToDo({todos} : PropTodo) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <div className={' bg-slate-50 '}>
            <div className={' w-full rounded-md px-8 py-6'}>
                <div className={'flex justify-between items-center mb-10'}>
                    <h2 className={'text-sky-950 text-lg font-bold font-[\'Inter\'] leading-[30px]'}>
                        Tasks To Do
                    </h2>
                    <Link href={'/'}
                          className={"text-right text-indigo-600 text-sm font-medium font-['Inter'] leading-[30px]"}>View
                        All</Link>
                </div>
                <div className={'flex flex-col gap-3'}>
                    {todos.map((todo, index) =>
                        <ToDoItem key={index} date={todo.date} status={todo.status} task={todo.task}/>)}
                </div>
            </div>
            <div onClick={onOpen} className={' cursor-pointer mt-3 px-10 py-7 bg-white rounded-md flex justify-between items-center'}>
                <h2>Add new task</h2>
                <div className={'text-violet-700'}>
                    <IoIosArrowForward fontSize={'1.5rem'}/>
                </div>
            </div>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent gap={'10px'}>
                    <ModalAddTask onClose={onClose} title={'Add new task'}/>
                </ModalContent>
            </Modal>
        </div>
    )
}