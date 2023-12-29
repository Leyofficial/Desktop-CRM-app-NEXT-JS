import Image from 'next/image'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";
import {BlueAppointment} from "@/components/BlueAppoinment/BlueAppointment";
import {blueAppoinmentList} from "@/consts/blue-appoinment-list";
import {CustomersCounter} from "@/components/Counter/Customers/CustomersCounter";
import {DealsCounter} from "@/components/Counter/Deals/DealsCounter";
import {RecentDetails} from "@/components/RecentDetails/RecentDetails";
import {recentDetailsList} from "@/consts/recent-details-list";

export default function Home() {
    return (
        <main className={'flex gap-10'}>
            <div>
                <Sidebar list={sideBarList}/>
            </div>
            <section className={'w-full'}>
                <div>
                    <header>
                        <Header href={'/add-new'} title={'Dashboard'} isButton={true} buttonTitle={'Add New'}/>
                    </header>
                    <section className={'my-5  flex gap-10'}>
                        <div>
                            <div className={'mb-10'}>
                                <BlueAppointment addressInfo={blueAppoinmentList.addressInfo}
                                                 appointmentDate={blueAppoinmentList.appointmentDate}
                                                 roomArea={blueAppoinmentList.roomArea} people={blueAppoinmentList.people}
                                                 price={blueAppoinmentList.price}/>
                            </div>
                            <section className={'flex flex-col gap-7'}>
                                <CustomersCounter title={'Customers'} numberOfPeople={10}/>
                                <DealsCounter title={'Deals'} numberOfPeople={82}/>
                            </section>
                        </div>
                       <div>
                           <RecentDetails detailsList={recentDetailsList}/>
                       </div>
                    </section>
                </div>
            </section>
        </main>
    )
}
