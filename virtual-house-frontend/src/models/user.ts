export interface User {
    user_id: number;
    name: string;
    surname: string;
    role_id: Role;
    email: string;
    phone: string;
    password: string;
}

export type Role = 'admin' | 'user';