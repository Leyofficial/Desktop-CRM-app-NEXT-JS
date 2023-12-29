import React, {ReactNode} from "react";

export interface ICustomerTypes {
    email: string,
    img : React.ReactNode |  ReactNode | string,
    name : string
}

export type CustomersType = {
    customers : ICustomerTypes[]
}