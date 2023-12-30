import {Button, ModalBody, ModalCloseButton,  ModalHeader, Select} from "@chakra-ui/react";
import {Img} from "@chakra-ui/image";
import React from "react";
import {CustomInput} from "@/components/CustomInput/CustomInput";

export type PropAddDeal = {
    title: string,
    user: {
        img: string,
        name: string,
        email: string,
    }
    onClose : () => void
}

export function AddDeal({user, title , onClose}: PropAddDeal) {
    const {img, name, email} = user
    return (
        <>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <div className={'flex items-center justify-between mb-7'}>
                    <div className={'flex items-center gap-3'}>
                        <div>
                            <Img width={'50px'} height={'50px'} className={'rounded-full'}
                                 src={'https://bit.ly/dan-abramov' || img}/>
                        </div>
                        <div>
                            <p className={'text-slate-400 '}>Customer</p>
                            <h2 className={'text-sky-950 text-base font-bold'}>{name}</h2>
                        </div>
                    </div>
                    <div className="w-[180px] h-[50px] px-6 py-2.5 bg-white rounded-[70px] border border-slate-200 justify-center items-center gap-4 inline-flex">
                        <div className="text-sky-950 text-sm font-medium font-['Inter'] leading-[30px]">Change Customer</div>
                    </div>
                </div>
                <form className={'flex flex-col gap-5 mb-10'}>
                    <CustomInput label={'Room Images'} placeholder={'ADD'} width={'100px'}/>
                    <CustomInput label={'Address'} placeholder={'Street Address'}/>
                    <div className={'flex gap-6 justify-between'}>
                        <CustomInput placeholder={'City'}/>
                        <CustomInput placeholder={'State / Province'}/>
                        <CustomInput placeholder={'Zip Code'}/>
                    </div>
                    <div className={'flex justify-between w-full'}>
                        <CustomInput type={'number'} label={'Room Area (m2)'} />
                        <CustomInput type={'number'} label={'# of People'}/>
                    </div>
                    <div>
                        <CustomInput type={'date'} label={'Appointment Date'} placeholder={'5 Nov , 2024'}/>
                    </div>
                    <CustomInput label={'Special Instructions'}/>
                    <div className={'flex w-full justify-between'}>
                        <CustomInput label={'Room Access'} placeholder={'Keys with doorman'}/>
                        <CustomInput label={'Price ($)'} type={'number'}/>
                    </div>
                </form>
                <div className={'mb-5'}>
                    <footer className={'flex gap-3 justify-between items-center'}>
                        <div className={'flex items-center gap-4'}>
                            <p className={'font-bold font-[\'Inter\']'}>Progress</p>
                            <div>
                                <Select defaultValue={'IN PROGRESS'}>
                                    <option value='option1'>IN PROGRESS</option>
                                    <option value='option2'>DONE</option>
                                    <option value='option3'>CLOSED</option>
                                </Select>
                            </div>
                        </div>
                        <div className={'flex items-center'}>
                            <Button onClick={onClose} mr={3} background={'transparent'} >
                                Close
                            </Button>
                            <button className="w-[150px] h-[50px] px-6 py-2.5 bg-indigo-600 rounded-[70px] justify-center items-center gap-4 inline-flex">
                                <div className="text-white font-medium font-['Inter'] leading-[30px]">Save Customer</div>
                            </button>
                        </div>
                    </footer>
                </div>
            </ModalBody>

        </>
    )
}