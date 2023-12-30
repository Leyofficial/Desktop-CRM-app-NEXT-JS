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


export function ModalAddNew({isOpen , onClose , title } : TypeModalAddNew) {
    return (
        <>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <p className={'w-[105px] text-slate-400 font-medium font-[\'Inter\'] leading-[30px]'}>
                            {title}
                        </p>
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody padding={0} borderRadius="md" marginY={2}>
                        {modalAddList.map((item) =>
                            <ModalAddItem icon={item.icon} title={item.title} />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )
}