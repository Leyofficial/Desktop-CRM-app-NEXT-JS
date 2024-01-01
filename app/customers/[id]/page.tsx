"use client"
import {Img} from "@chakra-ui/image";
import {customerDetails} from "@/consts/customer-details";
import {IoTrashOutline} from "react-icons/io5";
import {GoPlus} from "react-icons/go";
import {recentDealsList} from "@/consts/recent-deals-list";
import {UserRecentDeals} from "@/components/UserRecentDeals/UserRecentDeals";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {CustomLabel} from "@/components/CustomLabel/CustomLabel";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";

export default function CustomerItemPage({params}: {
    params: {
        id: string
    }
}) {


    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user} = customerDetails

    return (
        <main className={'flex gap-10 mb-12 mt-5'}>
            <div className={'w-full'}>
                <header className={"bg-[url('/cover-full.jpeg')] bg-cover relative h-[200px] w-full bg-no-repeat "}>
                    <div className={'text-end absolute bottom-5 flex items-center w-full justify-between  px-5'}>
                        <Img width={'100px'}
                             height={'100px'}
                             className={'rounded-full'}
                             src={'https://bit.ly/dan-abramov' || user.img}
                        />
                        <div className={'rounded-full bg-white p-4 cursor-pointer text-center'}>
                            <div><IoTrashOutline fontSize={'1.5rem'}/>
                            </div>
                        </div>
                    </div>
                </header>
                <section className={'flex flex-col gap-8 mt-10'}>
                    <section className={'flex items-center justify-between'}>
                        <div className={'flex flex-col gap-5'}>
                            <CustomLabel value={user.name} label={'First name'}/>
                            <CustomLabel value={user.email} label={'Email'}/>
                        </div>
                        <div className={'flex flex-col gap-5'}>
                            <CustomLabel value={user.lastName} label={'Last name'}/>
                            <CustomLabel value={user.phone} label={'Phone'}/>
                        </div>
                    </section>
                    <CustomLabel value={user.addressInfo.address} label={'Address'}/>
                    <div className={'flex gap-8'}>
                        <CustomLabel value={user.addressInfo.street} label={'City'}/>
                        <CustomLabel label={'State / Province'}/>
                        <CustomLabel label={'Zip code'}/>
                    </div>
                </section>
            </div>
            <div className={'w-2/3 bg-slate-100 rounded-md py-7 px-10'}>
                <header className={'flex justify-between items-center mb-5'}>
                    <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>
                        Recent Deals
                    </h2>
                    <div onClick={onOpen}
                         className="cursor-pointer w-10 h-10 p-2.5 bg-indigo-600 rounded-[50px] justify-center items-center inline-flex">
                        <div className=" text-sky-100 p-[4.38px] justify-center items-center inline-flex"><GoPlus
                            fontSize={'1.5rem'}/></div>
                    </div>
                </header>
                <section className={'flex flex-col gap-5'}>
                    {recentDealsList.map((item) => <UserRecentDeals deal={item.deal}/>)}
                </section>
            </div>
            <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent> <AddDeal user={user} onClose={onClose} title={'Add new deal'}/>
                </ModalContent></Modal>
        </main>
    )
}