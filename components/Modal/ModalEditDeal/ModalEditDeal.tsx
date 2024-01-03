import {
    ModalBody,
    ModalCloseButton,
    ModalHeader, Select,
} from "@chakra-ui/react";
import {CustomInput} from "@/components/CustomInput/CustomInput";
import {IModalAddCustomer} from "@/types/ModalTypes/ModalTypes";
import React from "react";
import {CustomFileInput} from "@/components/CustomFileInput/CustomFileInput";

export interface IEditDeal {
    updatedDeal : {
        img : string | null | File,
        addressInfo : {
            address : string,
            street : string,
            zipCode : string,
            stateProvince : string,
        },
        roomArea : number | string,
        numPeople : number | string,
        date : string,
        roomAccess : string,
        price : string | number
    }

}


export function ModalEditDeal({title}: IModalAddCustomer) {
    return (
        <>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <form className={'flex flex-col gap-5 mb-3'}>
                    <CustomFileInput/>
                    <CustomInput required={true} label={'Address'} placeholder={'Street Address'}/>
                    <div className={'flex gap-4'}>
                        <CustomInput required={true} label={'City'} width={'12rem'}/>
                        <CustomInput required={true} label={'State/Province'} width={'10rem'}/>
                        <CustomInput required={true} label={'Zip Code'} width={'6.8rem'}/>
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
            </ModalBody>
            <div className={'mt-2 mb-5'}>
                <footer className={'flex gap-3 px-7 py-5 justify-between items-center'}>
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
                        <button className="w-[150px] h-[50px] px-6 py-2.5 bg-indigo-600 rounded-[70px] justify-center items-center gap-4 inline-flex">
                            <div className="text-white font-medium font-['Inter'] leading-[30px]">Done</div>
                        </button>
                    </div>
                </footer>
            </div>
        </>
    )
}