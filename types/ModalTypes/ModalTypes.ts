import {ICustomerTypes} from "@/types/CustomerTypes/CustomerTypes";
import React, {ReactNode} from "react";

export interface IModalAddCustomer {
    customers? : ICustomerTypes[]
    onClose: () => void,
    title: string,
    isOpen? : boolean
}

export type PropAddDeal = {
    title: string,
    user: {
        img: string | null | File,
        name: string,
        email: string,
    }
    onClose : () => void
    changeCustomer? : (arg : null) => void
}
export type TypeModalAddNew = {
    title : string,
    isOpen : boolean,
    onClose: () => void,
    customers : ICustomerTypes[]
}

export type PropModalAddItem = {
    icon : React.ReactNode | ReactNode | string,
    title : string,
    onClickCallback? : any
    callbackText? : any
}