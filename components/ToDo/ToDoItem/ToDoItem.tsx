import {PropToDo} from "@/types/ToDoTypes/ToDoTypes";

export function ToDoItem({status , date , task} : PropToDo) {
    return (
        <section className={'flex items-center gap-3'}>
            <div className="w-[110px] h-[27px] text-slate-400  font-normal font-['Inter'] leading-[27px]">{date}</div>
            <div className="w-[201px] text-sky-950  font-normal font-['Inter'] leading-[27px]">{task}</div>
        </section>
    )
}