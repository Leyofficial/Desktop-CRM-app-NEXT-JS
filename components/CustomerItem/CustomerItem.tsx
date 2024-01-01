import {Td} from "@chakra-ui/table";
import {Img} from "@chakra-ui/image";
import {FiEdit3} from "react-icons/fi";
import {CustomerType} from "@/types/CustomerTypes/CustomerTypes";

export function CustomerItem({customer , onClick}: CustomerType) {
    const {email , img , name , addressInfo , phone} = customer.user
    return (
        <>

            <Td>
                <Img width={'50px'} height={'50px'} className={'rounded-full'}
                     src={'https://bit.ly/dan-abramov' || img}/>
            </Td>
            <Td>
                <div>{name}</div>
            </Td>
            <Td>
                <div>{email}</div>
            </Td>
            <Td>
                <div>{phone}</div>
            </Td>
            <Td>
                <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[25px]'}>{addressInfo.address} , {addressInfo.street}</h2>
            </Td>
            <Td>
                <div onClick={onClick} className={'text-slate-400 cursor-pointer'}>
                    <FiEdit3 fontSize={'1.5rem'}/>
                </div>
            </Td>
        </>
    )
}