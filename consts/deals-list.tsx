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
            status : 'in progress'
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
            status : 'in progress'
        }
    }
]

export type PropDeal = {
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
}