import {ICustomerTypes} from "@/types/CustomerTypes/CustomerTypes";

export type PropHeader = {
    title : string,
    isButton? : boolean
    buttonTitle? : string
    customers : ICustomerTypes[]
}