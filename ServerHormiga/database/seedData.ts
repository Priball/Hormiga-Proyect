
import bycriptjs from "bcryptjs";

interface ISeedData {
    users: SeedUser[];
    rols: SeedRol[],
}

interface SeedUser {
    name     : string,
    email    : string, 
    password : string,
    rol     : "admin" | "client" | "other" // Por el momento other
    active? : boolean
}

export interface SeedRol{
    name: string,
    
}


export const initialData: ISeedData = {
    users:[
        {
            name: "Daniel Torres",
            email: "daniel@gmail.com",
            password: bycriptjs.hashSync("123456", 10),
            rol: "admin",
            active: true
        },
        {
            name: "Carlos Perez",
            email: "carlos@gmail.com",
            password: bycriptjs.hashSync("123456", 10),
            rol: "client",
            active: true
        },
        {
            name: "Gabriela Guevara",
            email: "gabrielal@gmail.com",
            password: bycriptjs.hashSync("123456", 10),
            rol: "other",
            active: true
        },{
            name: "Inactivo Perez",
            email: "inactivoperez@gmail.com",
            password: bycriptjs.hashSync("123456", 10),
            rol: "other",
            active: false
        }
    ],
    rols:[
        {name: "admin"},
        {name: "client"},
        {name: "other"},
    ]
}