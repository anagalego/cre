import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'funcionario',
})

export class Funcionario {
    @Input()
    id: string;
    @Input()
    nome: string;
    @Input()
    palavraPasse: string;
    @Input()
    admin: boolean;
    @Input()
    feminino: boolean;
}