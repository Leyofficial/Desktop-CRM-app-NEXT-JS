import {Img} from "@chakra-ui/image";
import {IRecentDetailType} from "@/types/RecentDetailsTypes/RecentDetailsTypes";

export function UserRecentDeals({deal} : { deal : IRecentDetailType }) {
    const {img , addressInfo , date , price} = deal
    return (
        <div className="mt-2 justify-start items-center gap-4 inline-flex">
            {img ? <Img  width={'100px'}
                         height={'100px'}
                         className={'rounded-full'}
                         src={'https://bit.ly/dan-abramov' || img}
            /> : <div className="w-11 h-11 relative bg-zinc-200 rounded-[25px]">
                </div>}

            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[27px] justify-start items-start gap-[5px] inline-flex">
                    <div className="text-slate-600 text-base font-bold font-['Inter'] leading-[27px]">{addressInfo.address}</div>
                    <div className="text-slate-600 text-base font-bold font-['Inter'] leading-[27px]">{addressInfo.street},</div>
                </div>
                <div className="self-stretch h-[27px] justify-start items-start gap-3 inline-flex">
                    <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-[27px]">{date}</div>
                    <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-[27px]">•</div>
                    <div className="justify-start items-start gap-1.5 flex">
                        <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-[27px]">$</div>
                        <div className="text-slate-400 text-sm font-normal font-['Inter'] leading-[27px]">${price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}