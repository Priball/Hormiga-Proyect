export interface IUser{
    _id       : string,
    name      : string,
    email     : string,
    password? : string,
    rol       : string,
    active?   : string, 
    createdAt?: string,
    updatedAt?: string,
    }