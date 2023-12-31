'use client'
import {PropHeader} from "@/types/HeaderTypes/HeaderTypes";
import {IoIosAdd} from "react-icons/io";
import {IconButton} from "@/utility/CustomIconBtn/IconButton";
import {FiSearch} from "react-icons/fi";
import {Img} from "@chakra-ui/image";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {ModalAddNew} from "@/components/Modal/ModalAddNew/ModalAddNew";

export function HeaderWrapper({title, buttonTitle, isButton , customers}: PropHeader) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <section className={'flex justify-between w-full  gap-2 items-center'}>
                <div className="text-sky-950 text-2xl font-bold font-['Inter'] leading-10">{title}</div>
                <div className={'flex items-center gap-6 p-5'}>
                        <>
                            {isButton ?
                            <button onClick={onOpen}
                                    className={'pl-5 pr-4 py-2.5 bg-indigo-600 rounded-[70px] justify-center items-center gap-3 inline-flex'}>
                                <div
                                    className="text-white text-base font-medium font-['Inter'] leading-[30px]">{buttonTitle}</div>
                                <div className={'text-white text-2xl'}>
                                    <IoIosAdd/>
                                </div>
                            </button> : null}
                            <IconButton icon={<FiSearch/>} href={'/search'}/>
                            <Img width={'50px'} height={'50px'} className={'rounded-full'}
                                 src={'https://bit.ly/dan-abramov'}/>

                        </>
                </div>
            </section>
            <ModalAddNew customers={customers} isOpen={isOpen} onClose={onClose} title={'Add New'}/>
        </>
    )
}