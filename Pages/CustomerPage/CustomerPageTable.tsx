'use client'
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {customersList} from "@/consts/customers-list";
import {CustomerItem} from "@/components/CustomerItem/CustomerItem";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalAddCustomer} from "@/components/Modal/ModalAddCustomer/ModalAddCustomer";

export function CustomerPageTable() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><BsImageAlt fontSize={'1.5rem'}/></Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Phone</Th>
                            <Th>Address</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {customersList.map((item) =>
                            <CustomerItem customer={item} onClick={onOpen}/>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalAddCustomer onClose={onClose} title={'Edit customer'}/>
                </ModalContent>
            </Modal>
        </>
    )
}