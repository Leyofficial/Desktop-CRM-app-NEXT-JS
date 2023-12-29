import Image from 'next/image'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";
import {BlueAppointment} from "@/components/BlueAppoinment/BlueAppointment";
import {blueAppoinmentList} from "@/consts/blue-appoinment-list";
import {Customers} from "@/components/Customers/Customers";

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
                <section>
                    <Customers title={'Customers'} numberOfPeople={10}/>
                </section>
            </section>
        </main>
    )
}
