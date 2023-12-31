import {IModalAddCustomer} from "@/types/ModalTypes/ModalTypes";
import { ModalBody, ModalCloseButton, ModalFooter, ModalHeader} from "@chakra-ui/react";
import {customersList} from "@/consts/customers-list";
import {SelectUser} from "@/components/Modal/ModalAddDeal/SelectUser/SelectUser";
import {useEffect, useState} from "react";
import {AddDeal} from "@/components/Modal/ModalAddDeal/AddDeal/AddDeal";

export function ModalAddDeal({onClose, isOpen, title}: IModalAddCustomer) {
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
                            {customersList.map((user) =>
                                <SelectUser onChoose={setUserChoose} email={user.email} img={user.img}
                                            name={user.name}/>
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