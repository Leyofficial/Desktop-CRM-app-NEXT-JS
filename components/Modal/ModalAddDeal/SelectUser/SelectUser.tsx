import {Img} from "@chakra-ui/image";
import {IoIosArrowForward} from "react-icons/io";
import React from "react";

export function SelectUser({img , email , name , onChoose} : { img  : string | null | File , email : string , name : string , onChoose? : any | null  }) {
    return (
        <div onClick={() => onChoose({
            img,
            email,
            name
        })} className={'flex justify-between w-full cursor-pointer items-center'}>
            <div className={'flex gap-3 items-center'}>
                <Img width={'50px'} height={'50px'} className={'rounded-full'}
                     src={'https://bit.ly/dan-abramov' || img}/>
                <div>
                    <h2 className={'text-sky-950 text-base font-bold font-[\'Inter\']'}>
                        {name}
                    </h2>
                    <p className={'w-64 text-slate-400 font-normal font-[\'Inter\'] leading-relaxed'}>{email}</p>
                </div>
            </div>
            <section className={'text-violet-700 cursor-pointer'}>
                <IoIosArrowForward fontSize={'1.5rem'}/>
            </section>
        </div>
    )
}