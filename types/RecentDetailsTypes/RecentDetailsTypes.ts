import React, {ReactNode} from "react";
import {IAddress} from "@/types/BlueAppoinmentTypes/BlueAppoinmentTypes";

export interface IRecentDetailType {
    img : React.ReactNode | ReactNode | null | string,
    addressInfo : IAddress,
    price : string,
    date : string
}

export type PropRecentDetail = {
    detailsList : IRecentDetailType[]
}