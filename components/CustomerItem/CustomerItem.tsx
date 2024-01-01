import {Td, Tr} from "@chakra-ui/table";
import {Img} from "@chakra-ui/image";
import {FiEdit3} from "react-icons/fi";
import {CustomerType} from "@/types/CustomerTypes/CustomerTypes";
import {useRouter} from "next/navigation";


export function CustomerItem({customer, onClick}: CustomerType) {
    const router = useRouter()
    function handleClick(e : any) {
        if (e?.target?.id === 'editBtn') return
        router.push(`/customers/${customer.user.id}`)
    }

    const {email, img, name, addressInfo, phone} = customer.user
    return (

        <Tr onClick={handleClick} className={'cursor-pointer'}>
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
            <Td >
                <div className={'text-slate-400 cursor-pointer'}>
                    <FiEdit3  onClick={onClick} id={'editBtn'}  fontSize={'1.7rem'}/>
                </div>
            </Td>
        </Tr>
    )
}