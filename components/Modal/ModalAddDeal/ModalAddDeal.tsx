import {IModalAddCustomer} from "@/types/ModalTypes/ModalTypes";
import { ModalBody, ModalCloseButton, ModalFooter, ModalHeader} from "@chakra-ui/react";
import {SelectUser} from "@/components/Modal/ModalAddDeal/SelectUser/SelectUser";
import {useEffect, useState} from "react";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";

export function ModalAddDeal({onClose, isOpen, title , customers}: IModalAddCustomer) {
    const [userChoose, setUserChoose] = useState(null);

    useEffect(() => {
        setUserChoose(null)
    }, [isOpen]);

    useEffect(() => {
        console.log(userChoose)
    }, [userChoose]);

    return (
        <>
            {userChoose ? <AddDeal changeCustomer={setUserChoose} onClose={onClose} title={'Add new deal'} user={userChoose}/> :
                <> <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <div className={'flex flex-col mt-5 gap-5 items-start'}>
                            {customers?.map((item) =>
                                <SelectUser onChoose={setUserChoose} email={item.user.email} img={item.user.img}
                                            name={item.user.name}/>
                            )}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </>
            }
        </>
    )
}