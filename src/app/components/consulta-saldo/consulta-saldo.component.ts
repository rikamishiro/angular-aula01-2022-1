import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cliente } from '../../models/cliente';
import { ClassNamePorValorPipe } from '../../class-name-por-valor.pipe';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [
    CommonModule,
    ClassNamePorValorPipe,
  ],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css',
})
export class ConsultaSaldoComponent {

  public cliente = new Cliente(
    'Maria das Couves',
    99.99,
    new Date(),
  );

}
