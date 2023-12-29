import Link from "next/link";
import {todoList} from "@/consts/todo-list";
import {ToDoItem} from "@/components/ToDo/ToDoItem/ToDoItem";
import {IoIosArrowForward} from "react-icons/io";

export function ToDo() {
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
                    {todoList.map((todo) =>
                        <ToDoItem date={todo.date} status={todo.status} task={todo.task}/>)}
                </div>
            </div>
            <Link href={'/'}>
                <div className={' mt-3 px-10 py-7 bg-white rounded-md flex justify-between items-center'}>
                    <h2>Add new task</h2>
                    <div className={'text-violet-700'}>
                        <IoIosArrowForward fontSize={'1.5rem'}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}