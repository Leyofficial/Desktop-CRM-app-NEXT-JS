export interface IAddress {
    address : string,
    street : string
}
export type PropBlueAppoinment = {
    deal : {
        img? : string | File,
        addressInfo : IAddress,
        appointmentDate : string,
        roomArea : string,
        people  : string,
        price : string,
        id : string
    }
}
