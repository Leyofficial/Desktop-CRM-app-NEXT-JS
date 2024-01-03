import {dealsList} from "@/consts/deals-list";
import {DealItem} from "@/components/DealItem/DealItem";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {BsImageAlt} from "react-icons/bs";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalEditDeal} from "@/components/Modal/ModalEditDeal/ModalEditDeal";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {DealsPageTable} from "@/Pages/DealsPage/DealsPageTable/DealsPageTable";

export default async function DealsPage() {
    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {dealsList.length} deal/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
               <DealsPageTable/>
            </main>
        </div>
    )
}