import Link from "next/link";
import {PropRecentDetail} from "@/types/RecentDetailsTypes/RecentDetailsTypes";
import {Img} from "@chakra-ui/image";

export function RecentDetails({detailsList} : PropRecentDetail ) {
    return (
        <div className={'p-6 border border-b-emerald-50-50 rounded-md w-full'}>
            <header className={'flex justify-between'}>
                <div className="text-sky-950 text-lg font-bold font-['Inter'] leading-[30px]">
                    Recent Deals
                </div>
                <Link className={'flex items-center'} href={'/'}>
                    <p className={'text-indigo-600'}>
                        View All
                    </p>
                </Link>
            </header>
            <main className={'mt-10 flex flex-col gap-6'}>
                {detailsList.map((deal) =>
                    <div className={'flex justify-between items-center'}>
                        <header className={'flex gap-3'}>
                            <Img width={'50px'} height={'50px'} className={'rounded-full'}  src={'https://bit.ly/dan-abramov'}/>
                            <div className={''}>
                                <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[25px]'}>{deal.addressInfo.address}</h2>
                                <p className={'text-slate-400'}>{deal.addressInfo.street}</p>
                            </div>
                        </header>
                        <main className={'items-end'}>
                            <div className={'flex flex-col items-end'}>
                                <p className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>${deal.price}</p>
                                <p className={'text-slate-400 text-sm font-normal f'}>{deal.date}</p>
                            </div>

                        </main>
                    </div>
                )}
            </main>
        </div>
    )
}