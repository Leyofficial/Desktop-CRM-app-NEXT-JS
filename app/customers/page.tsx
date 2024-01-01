'use client'
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {customersList} from "@/consts/customers-list";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {CustomerItem} from "@/components/CustomerItem/CustomerItem";
import {ModalAddCustomer} from "@/components/Modal/ModalAddCustomer/ModalAddCustomer";

export default function CustomerPage() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total
                    : {customersList.length} customer/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
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
            </main>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalAddCustomer onClose={onClose} title={'Edit customer'}/>
                </ModalContent>
            </Modal>

        </div>
    )
}