import React, {ReactNode} from "react";

export interface IList {
    icon : React.ReactNode | ReactNode | React.ReactElement | any,
    href : string
}

export type PropSidebar = {
    list : IList[]
}