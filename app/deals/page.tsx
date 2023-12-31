'use client'
import {dealsList} from "@/consts/deals-list";
import {DealItem} from "@/components/DealItem/DealItem";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";


export default function DealsPage() {

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
                                    <Tr>
                                    <DealItem deal={item.deal}/>
                                    </Tr>
                                )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </main>

        </div>
    )
}