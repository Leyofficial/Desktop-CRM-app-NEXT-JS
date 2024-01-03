import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {TypeModalAddNew} from "@/types/ModalAddNewTypes/ModalAddNewTypes";
import {modalAddList} from "@/consts/modal-add-list";
import {ModalAddItem} from "@/components/Modal/ModalAddNew/ModalAddItem/ModalAddItem";
import {useEffect, useState} from "react";
import {ModalAddCustomer} from "@/components/Modal/ModalAddCustomer/ModalAddCustomer";
import {ModalAddDeal} from "@/components/Modal/ModalAddDeal/ModalAddDeal";
import {ModalAddTask} from "@/components/Modal/ModalAddTask/ModalAddTask";


export function ModalAddNew({isOpen , onClose , title } : TypeModalAddNew) {
    const [userChoose , setUserChoose] = useState(null);

    useEffect(() => {
        setUserChoose(null)
    }, [isOpen]);

    return (
        <>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {userChoose === 'Customer' ? <ModalAddCustomer title={'Add New Customer'} onClose={onClose}/> :
                        userChoose  === 'Deal' ?  <ModalAddDeal isOpen={isOpen} title={'Select Customer'} onClose={onClose}/> :
                        userChoose === 'Task' ?   <ModalAddTask onClose={onClose} title={'Add new task'}/> :
                        <>
                            <ModalHeader>
                                <p className={'w-[105px] text-slate-400 font-medium font-[\'Inter\'] leading-[30px]'}>
                                    {title}
                                </p>
                            </ModalHeader>
                            <ModalCloseButton />

                            <ModalBody padding={0} borderRadius="md" marginY={2}>
                                {modalAddList.map((item) =>
                                    <ModalAddItem onClickCallback={setUserChoose} key={item.title} icon={item.icon} title={item.title} />
                                )}
                            </ModalBody>
                        </>
                }
                </ModalContent>
            </Modal>

        </>
    )
}