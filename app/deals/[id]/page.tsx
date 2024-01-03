import {dealDetailList} from "@/consts/deal-detail-list";
import {Img} from "@chakra-ui/image";
import {IoTrashOutline} from "react-icons/io5";
import {FiEdit3} from "react-icons/fi";
import {Skeleton} from "@chakra-ui/skeleton";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {SingleDealAction} from "@/Pages/DealsPage/SingleDealPage/SingleDealAction";

export default async function DealItemPage({params} : {params : {
    id : string
    }}) {
    const {deal} = dealDetailList
    return (
        <div className={'bg-slate-50 rounded-md '}>
            <header className={'flex py-10 px-8  w-full gap-24  bg-opacity-90'}>
                <div className={'flex gap-4'}>
                    <Img width={'50px'} height={'50px'} className={'rounded-full bg-slate-400'}
                         src={'https://bit.ly/dan-abramov' || deal.userInfo.img}/>
                    <div>
                        <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Customer</p>
                        <h2 className={'text-slate-600 text-xm font-bold font-[\'Inter\']'}>{deal.userInfo.name} {deal.userInfo.lastName}</h2>
                    </div>
                </div>
                <div>
                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Email</p>
                    <h2 className={'text-slate-600 text-xm font-bold font-[\'Inter\']'}>{deal.userInfo.email}</h2>
                </div>
                <div>
                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Phone</p>
                    <h2 className={'text-slate-600 text-xm font-bold font-[\'Inter\']'}>{deal.userInfo.phone}</h2>
                </div>
            </header>
            <section>
                <SingleDealAction userInfo={deal.userInfo}/>
            </section>
            <main className={'px-8 py-5 mb-24'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'rounded-md flex-col flex'}>
                        <div className={'flex justify-between items-center'}>
                            <div className={'flex flex-col gap-8 items-start'}>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Progress</p>
                                    <h2 className={'text-slate-600 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>{deal.status}</h2>
                                </div>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Room
                                        Area</p>
                                    <h2 className={'text-slate-600 text-xl  font-bold font-[\'Inter\'] leading-[30px]'}>{deal.roomArea}m2</h2>
                                </div>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Price</p>
                                    <h2 className={'text-slate-600 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>${deal.price}</h2>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-8 items-start'}>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Appointment
                                        Date</p>
                                    <h2 className={'text-slate-600 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>{deal.date}</h2>
                                </div>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Number
                                        of
                                        people</p>
                                    <h2 className={'text-slate-600 text-xl font-bold font-[\'Inter\'] leading-[30px]'}>{deal.numberOfPeople}</h2>
                                </div>
                                <div>
                                    <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Room
                                        Access</p>
                                    <h2 className={'text-slate-600 text-xl  font-bold font-[\'Inter\'] leading-[30px]'}>{deal.roomAccess}</h2>
                                </div>
                            </div>
                        </div>
                        <footer className={'mt-10'}>
                            <p className={'text-slate-400 text-sm font-normal font-[\'Inter\'] leading-[30px]'}>Special
                                Instructions</p>
                            <h2 className={'w-[467px] text-slate-600 text-xm font-medium font-[\'Inter\'] leading-[30px]'}>{deal.specialInstructions}</h2>
                        </footer>
                    </div>
                    <div>
                        <Skeleton height={'400px'} width={'420px'}/>
                    </div>
                </div>
            </main>
        </div>
    )
}