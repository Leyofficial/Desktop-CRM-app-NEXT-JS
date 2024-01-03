import {todoList} from "@/consts/todo-list";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {TaskPageTable} from "@/Pages/TaskPage/TaskPageTable/TaskPageTable";

export default async function TasksPage() {
    return (
        <div className={'w-full mt-10'}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {todoList.length} task/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
               <TaskPageTable/>
            </main>
        </div>
    )
}