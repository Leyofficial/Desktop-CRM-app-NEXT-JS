import {ModalBody, ModalCloseButton, ModalHeader} from "@chakra-ui/react";
import {CustomInput} from "@/components/CustomInput/CustomInput";

export type PropModalAddTask = {
    title: string,
    onClose : () => void
}
export function ModalAddTask({title , onClose} : PropModalAddTask) {
    return (
        <div className={'w-full'}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody className={'mt-2'}>
                <div className={'flex flex-col gap-5'}>
                    <div>
                        <textarea className={'bg-slate-400 py-[12px] px-[20px] h-[90px] w-full  border border-slate-200 rounded-md'} placeholder={'Enter task description'} />
                    </div>
                    <div>
                        <CustomInput type={'date'} label={'Due date'} placeholder={'Due date'}/>
                    </div>
                </div>
                <footer className={'my-7'}>
                    <div className="w-full h-[50px] justify-between items-center gap-4 inline-flex">
                        <div onClick={onClose} className="grow shrink basis-0 h-[50px] px-6 py-2.5 rounded-[70px] justify-center items-center gap-4 flex">
                            <div className="text-sky-950 font-medium font-['Inter'] cursor-pointer leading-[30px]">Cancel</div>
                        </div>
                        <div className="grow shrink basis-0 h-[50px] px-6 py-2.5 bg-indigo-600 rounded-[70px] justify-center items-center gap-4 flex">
                            <div className="text-white  font-medium font-['Inter'] leading-[30px] cursor-pointer">Save Task</div>
                        </div>
                    </div>
                </footer>
            </ModalBody>
        </div>
    )
}