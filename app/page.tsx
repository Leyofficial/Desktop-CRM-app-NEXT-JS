import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";
import {BlueAppointment} from "@/components/BlueAppoinment/BlueAppointment";
import {blueAppoinmentList} from "@/consts/blue-appoinment-list";
import {CustomersCounter} from "@/components/Counter/Customers/CustomersCounter";
import {DealsCounter} from "@/components/Counter/Deals/DealsCounter";
import {RecentDetails} from "@/components/RecentDetails/RecentDetails";
import {recentDetailsList} from "@/consts/recent-details-list";
import {ProgressDeal} from "@/components/ProgressDeal/ProgressDeal";
import {dealProgressList} from "@/consts/deal-progress-list";
import {Customers} from "@/components/Customers/Customers";
import {customersList} from "@/consts/customers-list";
import {ToDo} from "@/components/ToDo/ToDo";

export default function Home() {
    return (
        <main className={'flex gap-10'}>
            <div>
                <Sidebar list={sideBarList}/>
            </div>
            <section className={'w-full'}>
                <div>
                    <header className={'w-full'}>
                        <Header title={'Dashboard'} isButton={true} buttonTitle={'Add New'}/>
                    </header>
                    <section className={'my-5 pr-5  flex gap-7 justify-between'}>
                        <div className={'w-full max-w-[350px]'}>
                            <div className={'mb-10'} data-testid="blue-appointment">
                                <BlueAppointment addressInfo={blueAppoinmentList.addressInfo}
                                                 appointmentDate={blueAppoinmentList.appointmentDate}
                                                 roomArea={blueAppoinmentList.roomArea}
                                                 people={blueAppoinmentList.people}
                                                 price={blueAppoinmentList.price}/>
                            </div>
                            <section data-testid="customers-counter" className={'flex flex-col gap-7'}>
                                <CustomersCounter title={'Customers'} numberOfPeople={10}/>
                                <DealsCounter title={'Deals'} numberOfPeople={82}/>
                            </section>
                        </div>
                        <div className={'w-full'}>
                            <div data-testid={'recent-details'}>
                                <RecentDetails detailsList={recentDetailsList}/>
                            </div>
                            <div data-testid={'progress-deal'}>
                                <ProgressDeal dealProgress={dealProgressList}/>
                            </div>
                        </div>
                        <div className={'p-5 py-6 bg-slate-100 w-full rounded-md'}>
                            <div data-testid={'customers'}>
                                <Customers customers={customersList}/>
                            </div>
                            <div data-testid={'to-do'}>
                                <ToDo/>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}
