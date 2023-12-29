import Image from 'next/image'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";

export default function Home() {
  return (
    <main className={'flex gap-10'}>
        <aside>
            <Sidebar list={sideBarList}/>
        </aside>
        <header className={'w-full'}>
            <Header href={'/add-new'} title={'Dashboard'} isButton={true} buttonTitle={'Add New'}/>
        </header>
    </main>
  )
}
