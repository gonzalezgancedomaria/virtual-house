export interface User {
    id: number;
    name: string;
    surname: string;
    role: Role;
    email: string;
    phone: string;
    password: string;
}

export type Role = 'admin' | 'user';