import Image from 'next/image'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";

export default function Home() {
  return (
    <main>
      <Sidebar list={sideBarList}/>
    </main>
  )
}
