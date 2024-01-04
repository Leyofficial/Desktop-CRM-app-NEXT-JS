import {Img} from "@chakra-ui/image";
import {customerDetails} from "@/consts/customer-details";
import {IoTrashOutline} from "react-icons/io5";
import {recentDealsList} from "@/consts/recent-deals-list";
import {UserRecentDeals} from "@/components/UserRecentDeals/UserRecentDeals";
import {CustomLabel} from "@/components/CustomLabel/CustomLabel";
import {SingleCustomerPage} from "@/pages/CustomerPage/SingleCustomerPage/SingleCustomerPage";

export default async function CustomerItemPage({params}: {
    params: {
        id: string
    }
}) {

    const {user} = customerDetails

    return (
        <main className={'flex gap-10 mb-12 mt-5'}>
            <div className={'w-full'}>
                <header className={"bg-[url('/cover-full.jpeg')] bg-cover relative h-[200px] w-full bg-no-repeat "}>
                    <div className={'text-end absolute bottom-5 flex items-center w-full justify-between  px-5'}>
                        <Img width={'100px'}
                             height={'100px'}
                             className={'rounded-full'}
                             src={'https://bit.ly/dan-abramov' || user.img}
                        />
                        <div className={'rounded-full bg-white p-4 cursor-pointer text-center'}>
                            <div><IoTrashOutline fontSize={'1.5rem'}/>
                            </div>
                        </div>
                    </div>
                </header>
                <section className={'flex flex-col gap-8 mt-10'}>
                    <section className={'flex items-center justify-between'}>
                        <div className={'flex flex-col gap-5'}>
                            <CustomLabel value={user.name} label={'First name'}/>
                            <CustomLabel value={user.email} label={'Email'}/>
                        </div>
                        <div className={'flex flex-col gap-5'}>
                            <CustomLabel value={user.lastName} label={'Last name'}/>
                            <CustomLabel value={user.phone} label={'Phone'}/>
                        </div>
                    </section>
                    <CustomLabel value={user.addressInfo.address} label={'Address'}/>
                    <div className={'flex gap-8'}>
                        <CustomLabel value={user.addressInfo.street} label={'City'}/>
                        <CustomLabel label={'State / Province'}/>
                        <CustomLabel label={'Zip code'}/>
                    </div>
                </section>
            </div>
            <div className={'w-2/3 bg-slate-100 rounded-md py-7 px-10'}>
              <header>
                  <SingleCustomerPage user={user}/>
              </header>
                <section className={'flex flex-col gap-5'}>
                    {recentDealsList.map((item) => <UserRecentDeals deal={item.deal}/>)}
                </section>
            </div>
        </main>
    )
}