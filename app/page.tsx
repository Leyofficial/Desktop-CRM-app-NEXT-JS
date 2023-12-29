import Image from 'next/image'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";
import {BlueAppointment} from "@/components/BlueAppoinment/BlueAppointment";
import {blueAppoinmentList} from "@/consts/blue-appoinment-list";
import {CustomersCounter} from "@/components/Counter/Customers/CustomersCounter";
import {DealsCounter} from "@/components/Counter/Deals/DealsCounter";

export default function Home() {
    return (
        <main className={'flex gap-10'}>
            <Sidebar list={sideBarList}/>
            <section className={'w-full'}>
                <header>
                    <Header href={'/add-new'} title={'Dashboard'} isButton={true} buttonTitle={'Add New'}/>
                </header>
                <section className={'my-5'}>
                    <BlueAppointment addressInfo={blueAppoinmentList.addressInfo}
                                     appointmentDate={blueAppoinmentList.appointmentDate}
                                     roomArea={blueAppoinmentList.roomArea} people={blueAppoinmentList.people}
                                     price={blueAppoinmentList.price}/>
                </section>
                <section className={'flex flex-col gap-10'}>
                    <CustomersCounter title={'Customers'} numberOfPeople={10}/>
                    <DealsCounter title={'Deals'} numberOfPeople={82}/>
                </section>
            </section>
        </main>
    )
}
