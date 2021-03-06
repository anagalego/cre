import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input } from '@angular/core';
import { Funcionario } from './funcionario';

@Directive({
    selector: 'produto',
})

export class Produto {
    @Input()
    categoria: string;
    @Input()
    cor: string;
    @Input()
    data: string;
    @Input()
    funcionario: string;
    @Input()
    id: string;
    @Input()
    quantidade: number;
    @Input()
    fatura: number;
}