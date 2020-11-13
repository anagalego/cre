import { Directive, Input } from '@angular/core';


@Directive({
    selector: 'categoria',
})

export class Categoria {
    @Input()
    id: string;
    @Input()
    nome: string;
    @Input()
    x: number;
    @Input()
    y: number;
    @Input()
    z: number;
    @Input()
    pvp: number;
}