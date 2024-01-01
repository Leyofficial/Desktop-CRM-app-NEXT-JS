import React, {ReactNode} from "react";

export interface ICustomerTypes {
    user : {
        email: string,
        img : React.ReactNode |  ReactNode | string,
        name : string,
        phone : string,
        addressInfo : {
            address  : string,
            street : string
        }
        onChoose? : any
        id : string
    }
}

export type CustomersType = {
    customers : ICustomerTypes[],
}
export type CustomerType = {
    customer : ICustomerTypes,
    onClick : () => void
}