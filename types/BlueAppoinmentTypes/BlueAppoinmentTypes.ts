export interface IAdress {
    address : string,
    street : string
}
export type PropBlueAppoinment = {
    img? : string,
    addressInfo : IAdress,
    appointmentDate : string,
    roomArea : string,
    people  : string,
    price : string,
}
