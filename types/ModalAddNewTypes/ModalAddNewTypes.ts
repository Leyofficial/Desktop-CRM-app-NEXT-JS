import React, {ReactNode} from "react";

export type TypeModalAddNew = {
    title : string,
    isOpen : boolean,
    onClose: () => void
}

export type PropModalAddItem = {
    icon : React.ReactNode | ReactNode | string,
    title : string,
    onClickCallback? : any
    callbackText? : any
}