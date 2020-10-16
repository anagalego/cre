import { Produto } from './produto';

export class Fatura {
    id: string;
    fatura: number;
    datafatura: string;
    cliente: string;
    faturado: boolean;
}