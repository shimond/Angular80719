export interface Person {
    name: string;
    age: number;
    email: string;
    gender: Gender;
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}

