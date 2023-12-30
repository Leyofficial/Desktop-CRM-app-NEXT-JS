import React, {ReactNode} from "react";

export interface ICustomerTypes {
    email: string,
    img : React.ReactNode |  ReactNode | string,
    name : string
    onChoose? : any
}

export type CustomersType = {
    customers : ICustomerTypes[]
}