export interface User{
    id?: number;
    type: UserType;
    login: string;
    password: string;
    email: string;
    name?: string;
    surname?: string;
}

export interface UserLogin{
    login: string;
    password: string;
    remember_me: boolean;
}
  
export enum UserType{
    Standard,
    PlaceAdmnistator,
    PageAdministator
}