import {PropBlueAppoinment} from "@/types/BlueAppoinmentTypes/BlueAppoinmentTypes";
import {TbPointFilled} from "react-icons/tb";
import {Img} from "@chakra-ui/image";

export function BlueAppointment({addressInfo , people , img , price , roomArea , appointmentDate} : PropBlueAppoinment) {
    return (
        <div className={' bg-indigo-600 text-white px-10 py-7 w-full rounded-md'}>
            <div className={' mb-7 flex justify-between items-center'}>
                <h2 className={'text-white text-lg font-bold font-Inter leading-[30px]'}>
                    Next Appointment
                </h2>
                <TbPointFilled />
            </div>
            <div className={'flex items-center gap-2 mb-10'}>
                <Img width={'50px'} height={'50px'} className={'rounded-full'}  src={'https://bit.ly/dan-abramov' || img}/>
                <div>
                    <h2 className={'font-bold font-Inter'}>
                        {addressInfo.address}
                    </h2>
                    <p>
                        {addressInfo.street}
                    </p>
                </div>
            </div>
            <div>
                Appointment Date
                <p className={'text-white text-sm font-bold font-Inter leading-[27px]'}>{appointmentDate}</p>
            </div>
            <div className={'flex items-center my-10 justify-between'}>
                <div className={'flex flex-col gap-2'}>
                    Room Area
                    <p className={'font-bold font-Inter'}>{roomArea}</p>
                </div>
                <div  className={'flex flex-col gap-2'}>
                    People
                    <p className={'font-bold font-Inter'}>{people}</p>
                </div>
            </div>
            <div className={'flex items-center justify-between'}>
                <div>
                    Price
                    <p  className={'font-bold font-Inter'}>${price}</p>
                </div>
                <div className="w-[132px] h-[50px] cursor-pointer px-6 py-2.5 bg-white rounded-[70px] border border-slate-200 justify-center items-center gap-4 inline-flex">
                    <div className="text-sky-950 text-sm font-medium font-Inter leading-[30px]">See Detail</div>
                </div>
            </div>
        </div>
    )
}