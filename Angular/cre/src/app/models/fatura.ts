import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'fatura',
})

export class Fatura {
    @Input()
    id: number;
    @Input()
    idProduto: string;
    @Input()
    datafatura: string;
    @Input()
    cliente: number;
}