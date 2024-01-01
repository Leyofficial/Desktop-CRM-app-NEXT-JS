import {Img} from "@chakra-ui/image";
import {FiEdit3} from "react-icons/fi";

export function Customer({img, name, email}: {img : string | null | any , name : string , email : string}) {
    return (
        <main className={'flex items-center justify-between'}>
            <div className={'flex gap-3 items-center'}>
                <div>
                    <Img width={'50px'} height={'50px'} className={'rounded-full'}
                         src={'https://bit.ly/dan-abramov' || img}/>
                </div>
                <div>
                   <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\'] leading-[25px]'}>{name}</h2>
                    <p className={'text-slate-400'}>{email}</p>
                </div>
            </div>
            <div className={'text-slate-400 cursor-pointer'}>
                <FiEdit3 fontSize={'1.5rem'}/>
            </div>
        </main>
    )
}