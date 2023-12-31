'use client'
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {DealItem} from "@/components/DealItem/DealItem";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalEditDeal} from "@/components/Modal/ModalEditDeal/ModalEditDeal";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {IDeal, IDeals} from "@/consts/deals-list";

export function DealsPageTable({deals} : IDeals) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><BsImageAlt fontSize={'1.5rem'}/></Th>
                            <Th>Name</Th>
                            <Th>Area</Th>
                            <Th>Appointment Date</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {deals.map((item : IDeal) =>
                            <DealItem onClick={onOpen} deal={item.deal}/>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalEditDeal  onClose={onClose} title={'Edit Deal'}/>
                </ModalContent>
            </Modal>
        </>
    )
}