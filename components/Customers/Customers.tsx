import Link from "next/link";
import {CustomersType} from "@/types/CustomerTypes/CustomerTypes";
import {Customer} from "@/components/Customers/Customer/Customer";

export function Customers({customers} : CustomersType){
    return (
        <div className={'rounded-md mb-10'}>
            <div className={'flex justify-between items-center'}>
                <h2 className={'text-sky-950 text-lg font-bold '}>Customers</h2>
                <Link href={'/'} className={"text-right text-indigo-600 text-sm font-medium font-['Inter'] leading-[30px]"}>View All</Link>
            </div>
            <div className={'mt-10 flex flex-col gap-5'}>
                {customers.map((customer , index) => {
                    return <Customer key={index} email={customer.email} img={customer.img} name={customer.name}/>
                })}
            </div>
        </div>
    )
}