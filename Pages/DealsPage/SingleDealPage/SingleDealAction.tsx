'use client'
import {IoTrashOutline} from "react-icons/io5";
import {FiEdit3} from "react-icons/fi";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";

export function SingleDealAction({userInfo} : any){
    const {isOpen, onOpen, onClose} = useDisclosure()
     return (
         <>
             <section
                 className={'flex justify-between items-center bg-white px-8 rounded-md border border-b-slate-50 py-5'}>
                 <div>
                     <h2 className={'text-sky-950 text-[28px] text-xl mb-6 font-bold font-[\'Inter\'] leading-10"'}>{userInfo.addressInfo.address},</h2>
                     <h2 className={'text-sky-950 text-[28px] text-xl font-bold font-[\'Inter\'] leading-10"'}>{userInfo.addressInfo.street}</h2>
                 </div>
                 <div className={'flex items-center gap-3'}>
                     <div
                         className="w-[50px] cursor-pointer h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                         <div className="w-5 h-5 pl-[1.87px] pr-[1.88px] py-px justify-center items-center inline-flex">
                             <div className="w-[16.25px] h-[17.92px] relative"><IoTrashOutline/>
                             </div>
                         </div>
                     </div>
                     <div
                         className="w-[50px] cursor-pointer  h-[50px] p-[15px] bg-white rounded-[50px] border border-slate-200 justify-center items-center inline-flex">
                         <div className="w-5 h-5 pl-[1.87px] pr-[1.88px] py-px justify-center items-center inline-flex">
                             <div onClick={onOpen} className="w-[16.25px] h-[17.92px] relative"><FiEdit3/>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
             <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                 <ModalOverlay/>
                 <ModalContent> <AddDeal user={userInfo} onClose={onClose} title={'Add new deal'}/>
                 </ModalContent>
             </Modal>
         </>
     )
}