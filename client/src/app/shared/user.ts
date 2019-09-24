export interface User{
    id?: number;
    type: UserType;
    login: string;
    password: string;
    email: string;
    name?: string;
    surname?: string;
}
  
export enum UserType{
    Standard,
    PlaceAdmnistator,
    PageAdministator
}