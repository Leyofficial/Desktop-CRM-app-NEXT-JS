'use client'
import {dealsList} from "@/consts/deals-list";
import {DealItem} from "@/components/DealItem/DealItem";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalEditDeal} from "@/components/Modal/ModalEditDeal/ModalEditDeal";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {useRouter} from "next/navigation";


export default function DealsPage() {
    const router = useRouter()
    const {isOpen, onOpen, onClose} = useDisclosure()

    function handleClick(id : string) {
        router.push(`/deals/${id}`)
    }

    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {dealsList.length} deal/s</h2>
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
                                <Th>Area</Th>
                                <Th>Appointment Date</Th>
                                <Th>Price</Th>
                                <Th>Status</Th>
                                <Th>Edit</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dealsList.map((item) =>
                                <Tr className={'cursor-pointer'} onClick={() => handleClick(item.deal.id)}>
                                    <DealItem onClick={onOpen} deal={item.deal}/>
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