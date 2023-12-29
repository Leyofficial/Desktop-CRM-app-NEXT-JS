import {PropProgressDeal} from "@/types/ProgressDealTypes/ProgressDealTypes";
import {Img} from "@chakra-ui/image";
import {IoIosArrowForward} from "react-icons/io";
import Link from "next/link";
import {VerticalStepper} from "@/components/ProgressDeal/VerticalStepper/VericalStepper";
export function ProgressDeal({dealProgress} :  PropProgressDeal) {
    return (
        <div className={'p-8 w-full  border border-b-emerald-50-50 rounded-md my-10'}>
            <header className={'flex justify-between items-center'}>
                <div className={'flex gap-3'}>
                    <div>
                        <Img width={'50px'} height={'50px'} className={'rounded-full'}  src={'https://bit.ly/dan-abramov' || dealProgress.img}/>
                    </div>
                    <div>
                        <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[27px]'}>{dealProgress.address.address}</h2>
                        <p className={'text-slate-400 font-normal font-[\'Inter\'] leading-[27px]'}>{dealProgress.address.street}</p>
                    </div>
                </div>
                <div className={'flex items-center gap-2'}>
                    <div className=" cursor-pointer w-[120px] h-10 px-5 py-2.5 bg-violet-100 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-indigo-600 text-xs font-medium font-['Inter'] uppercase leading-tight">IN PROGRESS</div>
                    </div>
                    <Link href={'/'} className={'text-violet-700'}>
                        <IoIosArrowForward fontSize={'1.5rem'}/>
                    </Link>
                </div>
            </header>
            <main className={'mt-10'}>
                <VerticalStepper progressSteps={dealProgress.progressSteps}/>
            </main>
        </div>
    )
}