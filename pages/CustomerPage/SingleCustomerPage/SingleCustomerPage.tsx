"use client"
import {GoPlus} from "react-icons/go";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";
import {ICustomerTypes} from "@/types/CustomerTypes/CustomerTypes";

export function SingleCustomerPage({user} : ICustomerTypes) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <header className={'flex justify-between items-center mb-5'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>
                    Recent Deals
                </h2>
                <div onClick={onOpen}
                     className="cursor-pointer w-10 h-10 p-2.5 bg-indigo-600 rounded-[50px] justify-center items-center inline-flex">
                    <div className=" text-sky-100 p-[4.38px] justify-center items-center inline-flex"><GoPlus
                        fontSize={'1.5rem'}/></div>
                </div>
            </header>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent> <AddDeal user={user} onClose={onClose} title={'Add new deal'}/>
                </ModalContent></Modal>
        </>
    )
}