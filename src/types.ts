export interface User {
  id?: string;
  name: string;
  age: number;
  gender: string;
}

export enum UserGender {
  Male = 'Male',
  Female = 'Female',
}
