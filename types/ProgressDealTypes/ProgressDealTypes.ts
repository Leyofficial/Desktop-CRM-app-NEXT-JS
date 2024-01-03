import React, {ReactNode} from "react";
import {IAddress} from "@/types/BlueAppoinmentTypes/BlueAppoinmentTypes";

export interface IDealInfoProgress {
    date : string,
    isComplete : boolean,
    title : string,
}

export interface IProgressSteps  {
    progressSteps : IDealInfoProgress[]
}

export interface IDealProgress {
    img : string | React.ReactNode | ReactNode | null,
    address : IAddress,
    progress : string,
    progressSteps : IDealInfoProgress[]
    id : string
}
export type PropProgressDeal = {
    dealProgress : IDealProgress
}