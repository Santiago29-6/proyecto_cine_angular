import { Role } from "./role.model";

export interface User {
  id?: number;
  username: string;
  password?: string;
  nombre: string;
  apellido: string;
  role: Role;
  fechaRegistro: Date,
  token?: string;
}
