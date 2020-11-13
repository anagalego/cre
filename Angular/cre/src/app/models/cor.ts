import { Directive, Input } from '@angular/core';


@Directive({
    selector: 'cor',
})

export class Cor {
    @Input()
    id: string;
    @Input()
    nome: string;
    @Input()
    hex: string;
}