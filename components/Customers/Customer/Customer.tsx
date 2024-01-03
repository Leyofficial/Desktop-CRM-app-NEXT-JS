'use client'
import {Img} from "@chakra-ui/image";
import {FiEdit3} from "react-icons/fi";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalAddCustomer} from "@/components/Modal/ModalAddCustomer/ModalAddCustomer";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";

export function Customer({img, name, email}: {img : string | null | any , name : string , email : string , id : string}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <main className={'flex items-center justify-between'}>
            <div className={'flex gap-3 items-center'}>
                <div>
                    <Img width={'50px'} height={'50px'} className={'rounded-full'}
                         src={'https://bit.ly/dan-abramov' || img}/>
                </div>
                <div>
                   <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[25px]'}>{name}</h2>
                    <p className={'text-slate-400'}>{email}</p>
                </div>
            </div>
            <div onClick={onOpen} className={'text-slate-400 cursor-pointer'}>
                <FiEdit3 fontSize={'1.5rem'}/>
            </div>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalAddCustomer onClose={onClose} title={'Edit customer'}/>
                </ModalContent>
            </Modal>
        </main>
    )
}