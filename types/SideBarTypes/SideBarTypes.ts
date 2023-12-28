import React from "react";

export interface IList {
    icon : React.ReactNode,
    href : string
}

export type PropSidebar = {
    list : IList[]
}