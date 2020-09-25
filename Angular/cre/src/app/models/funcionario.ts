import { Departamento } from './departamento';
import { Login } from './login';
import { Seccao } from './seccao';

export class Funcionario {
    id: number;
    departamento: Departamento;
    seccao: Seccao;
    login: Login;
}