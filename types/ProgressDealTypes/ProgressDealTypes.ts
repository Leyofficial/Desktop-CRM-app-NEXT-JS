import React, {ReactNode} from "react";
import {IAddress} from "@/types/BlueAppoinmentTypes/BlueAppoinmentTypes";

export interface IDealInfoProgress {
    date : string,
    isComplete : boolean,
    title : string,
}

export interface IDealProgress {
    img : string | React.ReactNode | ReactNode,
    address : IAddress,
    progress : string,
    progressSteps : IDealInfoProgress[] | IDealInfoProgress
}
export type PropProgressDeal = {
    dealProgress : IDealProgress
}