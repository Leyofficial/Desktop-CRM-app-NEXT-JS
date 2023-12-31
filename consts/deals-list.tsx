export const dealsList : PropDeal[] = [
    {
        deal  : {
            img : null,
            addressInfo :  {
                address : '1952 Chicago Avenue',
                zipCode : 'CA 93711'
            },
            area : '100',
            date : 'Nov 14, 2021 07:00 AM',
            price : '6000',
            status : 'in progress',
            id : '1asd2b21'
        }
    },
    {
        deal  : {
            img : null,
            addressInfo :  {
                address : '1950 Chicago Avenue',
                zipCode : 'CB 93711'
            },
            area : '1000',
            date : 'Nov 14, 2021 07:00 AM',
            price : '100.000',
            status : 'in progress',
            id : '2sd2e1d'
        }
    }
]

export type PropDeal = {
    onClick? : () => void;
    deal : IDeal
}

export interface IDeal {
    img : string | null,
    addressInfo :  {
        address : string,
        zipCode : string
    },
    area : string| number
    date : string
    price : string
    status : string
    id : string
}