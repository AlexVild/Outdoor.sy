import { Vehicle } from './Vehicle';

export interface Customer {
    firstName: string,
    lastName: string,
    email: string,
    vehicle: Vehicle
}