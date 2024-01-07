'use client'
import {PropDeal} from "@/consts/deals-list";
import {Img} from "@chakra-ui/image";
import {FiEdit3} from "react-icons/fi";
import {Td,} from "@chakra-ui/table";
import {useRouter} from "next/navigation";
import {Tr} from "@chakra-ui/react";

export function DealItem({deal, onClick}: PropDeal) {
    const {img, addressInfo, area, date, price, status} = deal;
    const router = useRouter();

    function handleClick(e: any) {
        if (e?.target?.id === 'editBtn') return
        router.push(`/deals/${deal.id}`)
    }

    return (
        <Tr onClick={handleClick} className={'cursor-pointer'}>
            <Td>
                <Img width={'50px'} height={'50px'} className={'rounded-full'}
                     src={'https://bit.ly/dan-abramov' || img}/>
            </Td>
            <Td>
                <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[25px]'}>{addressInfo.address} , {addressInfo.zipCode}</h2>
            </Td>
            <Td>
                <div>{area}</div>
            </Td>
            <Td>
                <div>{date}</div>
            </Td>
            <Td>
                <div>${price}</div>
            </Td>
            <Td>
                <div
                    className="text-indigo-600 text-xs font-medium font-['Inter'] uppercase leading-tight">{status.toUpperCase()}</div>
            </Td>
            <Td>
                    <div onClick={onClick} className={'text-slate-400 cursor-pointer'}>
                        <FiEdit3 id="editBtn" fontSize={'1.7rem'}/>
                    </div>

            </Td>
        </Tr>
    );
}