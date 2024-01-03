"use client"
import { ModalBody, ModalCloseButton, ModalHeader} from "@chakra-ui/react";
import {CustomInput} from "@/components/CustomInput/CustomInput";
import {useState} from "react";

export type PropModalEditTask = {
    onClose: () => void,
    title: string,
}

export function ModalEditTask({title , onClose} : PropModalEditTask) {
    const [checked , setChecked] = useState<boolean>(false)
    return (
        <><ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <form className={'flex flex-col gap-5 mb-3'}>
                    <div className={'flex justify-between items-center'}>
                        <h2>Complete?</h2>
                        <div>
                            <label className="container">
                                <input onChange={() => setChecked(!checked)} checked={checked} type={"checkbox"}/>
                                <div className="checkmark"></div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <CustomInput  label={'Due date'} type={'date' || 'text'}  placeholder={'1:26 pm 25 Nov 2024'}/>
                    </div>
                    <div>
                        <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] mb-2'}>Description</h2>
                        <textarea className={'w-full bg-slate-50 border border-slate-200 rounded-md py-[10px] px-[20px] '} placeholder={'About your task'}/>
                    </div>
                </form>
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
        </>
    )
}