import {dealsList} from "@/consts/deals-list";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {DealsPageTable} from "@/ui/DealsPage/DealsPageTable/DealsPageTable";

export default async function DealsPage() {
    return (
        <div className={'w-full mt-10 '}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {dealsList.length} deal/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
               <DealsPageTable deals={dealsList}/>
            </main>
        </div>
    )
}