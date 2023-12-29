export interface IAddress {
    address : string,
    street : string
}
export type PropBlueAppoinment = {
    img? : string,
    addressInfo : IAddress,
    appointmentDate : string,
    roomArea : string,
    people  : string,
    price : string,
}
