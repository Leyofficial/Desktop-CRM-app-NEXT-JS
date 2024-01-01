'use client'
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalEditDeal} from "@/components/Modal/ModalEditDeal/ModalEditDeal";
import {customersList} from "@/consts/customers-list";
import {useRouter} from "next/navigation";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {CustomerItem} from "@/components/CustomerItem/CustomerItem";

export default function CustomerPage() {
    const router = useRouter()
    const {isOpen, onOpen, onClose} = useDisclosure()

    function handleClick(id : string) {
        router.push(`/customers/${id}`)
    }
    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {customersList.length} customer/s</h2>
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
                                <Tr className={'cursor-pointer'} onClick={() => handleClick(item.user.id)}>
                                    <CustomerItem customer={item} onClick={onOpen}/>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </main>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalEditDeal  onClose={onClose} title={'Edit Deal'}/>
                </ModalContent>
            </Modal>

        </div>
    )
}