import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css'
})
export class ConsultaSaldoComponent {
  public cliente = new Cliente(
    'Maria das Couves',
    99.99,
    new Date(),
  );
}
