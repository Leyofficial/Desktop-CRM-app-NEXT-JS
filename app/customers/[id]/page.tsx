import {Img} from "@chakra-ui/image";
import {customerDetails} from "@/consts/customer-details";
import {IoTrashOutline} from "react-icons/io5";
import {CustomInput} from "@/components/CustomInput/CustomInput";

export default function CustomerItemPage({params}: {
    params: {
        id: string
    }
}) {
    const {user} = customerDetails
    return (
        <main className={'flex'}>
            <div className={'mb-12 mt-5'}>
                <header className={"bg-[url('/cover-full.jpeg')] bg-cover relative h-[200px] w-full bg-no-repeat "}>
                    <div className={'text-end absolute bottom-5 flex items-center w-full justify-between  px-5'}>
                        <Img  width={'100px'}
                              height={'100px'}
                              className={'rounded-full'}
                              src={'https://bit.ly/dan-abramov' || user.img}
                        />
                        <div className={'rounded-full bg-white p-4 cursor-pointer text-center'}>
                            <div ><IoTrashOutline fontSize={'1.5rem'}/>
                            </div>
                        </div>
                    </div>
                </header>
                <main className={'flex flex-col gap-8 mt-10'}>
                    <section className={'flex items-center justify-between'}>
                        <div className={'flex flex-col gap-5'}>
                            <CustomInput label={'First name'} placeholder={'Barbara'}/>
                            <CustomInput label={'Email'} type={'email'} placeholder={'banderson@gmail.com'}/>
                        </div>
                        <div className={'flex flex-col gap-5'}>
                            <CustomInput label={'Last name'} placeholder={'Anderson'}/>
                            <CustomInput label={'Phone'} type={'number'} placeholder={'310-685-3335'}/>
                        </div>
                    </section>
                    <CustomInput label={'Address'} placeholder={'Street address'}/>
                    <div className={'flex gap-8'}>
                        <CustomInput placeholder={'City'}/>
                        <CustomInput placeholder={'State / Province'}/>
                        <CustomInput placeholder={'Zip code'}/>
                    </div>
                </main>
            </div>
        </main>
    )
}