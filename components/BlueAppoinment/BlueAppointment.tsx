import {PropBlueAppoinment} from "@/types/BlueAppoinmentTypes/BlueAppoinmentTypes";
import {TbPointFilled} from "react-icons/tb";

export function BlueAppointment({addressInfo , people , img , price , roomArea , appointmentDate} : PropBlueAppoinment) {
    return (
        <div className={' bg-indigo-600 text-white px-10 py-7 max-w-[256px] rounded-md'}>
            <div className={'flex justify-between items-center'}>
                <h2 className={'text-white text-lg font-bold font-[\'Inter\'] leading-[30px]'}>
                    Next Appointment
                </h2>
                <TbPointFilled />
            </div>
        </div>
    )
}