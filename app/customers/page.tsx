import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {customersList} from "@/consts/customers-list";
import {CustomerPageTable} from "@/ui/CustomerPage/CustomerPageTable";


export default async function CustomerPage() {
    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total
                    : {customersList.length} customer/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
               <CustomerPageTable customers={customersList}/>
            </main>
        </div>
    )
}