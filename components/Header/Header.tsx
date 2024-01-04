import {customersList} from "@/consts/customers-list";
import {HeaderWrapper} from "@/components/Header/HeaderWrapper/HeaderWrapper";

export function Header({title} : {title : string }) {
    return (
        <HeaderWrapper title={title} customers={customersList} buttonTitle={'Add New'} isButton={true} />
    )
}