import {
    Button,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
} from "@chakra-ui/react";
import {CustomInput} from "@/components/CustomInput/CustomInput";

interface IModalAddCustomer {
    onClose: () => void,
    title: string,
    // list : Array<any>
}

export function ModalAddCustomer({onClose, title}: IModalAddCustomer) {
    return (
        <>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <form className={'flex flex-col gap-5 mb-3'}>
                    <CustomInput width={'5rem'} placeholder={'ADD'} label={'Avatar'}/>
                    <div className={'flex gap-5'}>
                        <CustomInput required={true} label={'First Name'}/>
                        <CustomInput required={true} label={'Last Name'}/>
                    </div>
                    <div className={'flex gap-5'}>
                        <CustomInput required={true} label={'Email'}/>
                        <CustomInput required={true} label={'Phone'}/>
                    </div>
                    <CustomInput required={true} label={'Address'} placeholder={'Street Address'}/>
                    <div className={'flex gap-4'}>
                        <CustomInput required={true} label={'City'} width={'12rem'}/>
                        <CustomInput required={true} label={'State/Province'} width={'10rem'}/>
                        <CustomInput required={true} label={'Zip Code'} width={'6.8rem'}/>
                    </div>
                </form>
            </ModalBody>

            <ModalFooter>
                <footer className={'flex gap-3 items-center'}>
                    <Button mr={3} background={'transparent'}  onClick={onClose}>
                        Close
                    </Button>
                    <button className="w-[150px] h-[50px] px-6 py-2.5 bg-indigo-600 rounded-[70px] justify-center items-center gap-4 inline-flex">
                        <div className="text-white font-medium font-['Inter'] leading-[30px]">Save Customer</div>
                    </button>
                </footer>
            </ModalFooter>
        </>
    )
}